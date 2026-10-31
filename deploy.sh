#!/usr/bin/env bash
#
# Canonical deploy script for nithin (glacier-portfolio).
#
# Step 1 (push): stage, commit, and push local changes to GitHub.
# Step 2 (deploy): this repo has no GitHub Actions workflow, and Netlify's
#   git-linked auto-deploy for this site could not be confirmed (the site id
#   below wasn't found under the "Nhancio-Deployment" Netlify team; it's
#   likely under a separate personal Netlify account) — so by default this
#   script runs the real manual Netlify deploy after every push, rather than
#   silently assuming CI/CD covers it.
#
# Usage: ./deploy.sh ["commit message"] [-m "commit message"] [--push-only] [--force-manual] [-h|--help]
#
set -euo pipefail
# Select the GitHub account for this repository before every push.
# Override GITHUB_ACCOUNT when a repository is intentionally owned by a different account.
GITHUB_ACCOUNT="${GITHUB_ACCOUNT:-didigamnithin}"

ensure_github_account() {
  command -v gh >/dev/null 2>&1 || {
    echo "GitHub CLI (gh) is required to push as $GITHUB_ACCOUNT." >&2
    echo "Install gh and authenticate with: gh auth login --hostname github.com" >&2
    return 1
  }
  gh auth token --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null 2>&1 || {
    echo "GitHub CLI is not authenticated as $GITHUB_ACCOUNT." >&2
    echo "Authenticate that account first, then rerun this deploy." >&2
    return 1
  }
  gh auth switch --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null || {
    echo "Could not switch GitHub CLI to $GITHUB_ACCOUNT." >&2
    return 1
  }
  echo "Using GitHub account: $GITHUB_ACCOUNT"
}

push_with_github_account() {
  ensure_github_account
  git push "$@"
}


SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
# Deploys ship main: commit pending work, merge every local and GitHub branch
# into main, and push main before the deploy below runs. Anything unsafe (a
# merge conflict, a secret, dependency folder or >100 MB file about to be
# committed, a failed push) stops the deploy before it ships.
# Flags that skip git skip this too.
_sync_git() {
  if [ -n "${_SYNC_TOKEN:-}" ]; then
    GH_TOKEN="$_SYNC_TOKEN" git -c credential.helper= -c 'credential.helper=!gh auth git-credential' "$@"
  else
    git "$@"
  fi
}

# Unstages everything and fails if `git add -A` picked up a new file that must not be committed.
_sync_check_staged() {
  local raw big line meta path mode sha bad=""
  raw="$(git -c core.quotePath=false diff --cached --diff-filter=A --no-renames --raw --no-abbrev)"
  [ -n "$raw" ] || return 0
  big=" $(printf '%s\n' "$raw" | awk '$2 != "160000" {print $4}' \
    | git cat-file --batch-check='%(objectsize) %(objectname)' | awk '$1 > 100000000 {print $2}' | tr '\n' ' ')"
  while IFS= read -r line; do
    meta="${line%%	*}"; path="${line#*	}"
    read -r _ mode _ sha _ <<< "$meta"
    case "/$path" in
      */.env.example|*/.env.sample|*/.env.template|*.example) ;;
      */.env|*/.env.*|*.pem|*.key|*.p12|*.pfx|*.jks|*.keystore|*/id_rsa*|*/id_ed25519*|*service-account*.json|*serviceAccount*.json|*/credentials.json|*client_secret*.json)
        bad="$bad"$'\n'"  $path  (looks like a secret)" ;;
      */node_modules/*) bad="$bad"$'\n'"  $path  (dependency folder)" ;;
    esac
    case "$big" in *" $sha "*) bad="$bad"$'\n'"  $path  (over 100 MB; GitHub rejects it)" ;; esac
    if [ "$mode" = 160000 ] && ! git config -f .gitmodules --get-regexp '\.path$' 2>/dev/null | awk '{print $2}' | grep -qxF "$path"; then
      bad="$bad"$'\n'"  $path  (nested git repo; its files would not ship)"
    fi
  done <<< "$raw"
  [ -n "$bad" ] || return 0
  git reset -q
  echo "Deploy stopped: nothing was committed, because these new files should not go into git:$bad" >&2
  echo "Add them to .gitignore (or commit them yourself if they really belong in git), then rerun." >&2
  return 1
}

_sync_merge() {
  case "$1" in refs/heads/main|refs/remotes/origin/HEAD|*/gh-pages) return 0 ;; esac
  git merge-base --is-ancestor "$1" HEAD 2>/dev/null && return 0
  echo "Merging ${1#refs/}"
  git merge -q --no-edit "$1" && return 0
  git merge --abort 2>/dev/null || true
  echo "Deploy stopped: ${1#refs/} does not merge cleanly into main. Merge it by hand, then rerun." >&2
  return 1
}

sync_branches_into_main() {
  local arg ref start start_ref before tries _SYNC_TOKEN=""
  for arg in "$@"; do
    case "$arg" in -h|--help|--dry-run|--no-git|--no-push|--skip-push|--deploy-only) return 0 ;; esac
  done
  [ -z "${DEPLOY_BRANCHES_SYNCED:-}" ] || return 0
  if [ -f .git ] || [ "$(git rev-parse --show-toplevel 2>/dev/null)" != "$(pwd -P)" ]; then
    echo "Branch sync skipped: $(pwd) is not a standalone git repository."
    return 0
  fi
  git remote get-url origin >/dev/null 2>&1 || { echo "Branch sync skipped: no 'origin' remote."; return 0; }
  for ref in MERGE_HEAD CHERRY_PICK_HEAD REVERT_HEAD rebase-merge rebase-apply; do
    [ ! -e "$(git rev-parse --git-path "$ref")" ] || { echo "Deploy stopped: finish the in-progress git operation first." >&2; return 1; }
  done
  ref="$(git rev-parse --git-path index.lock)"
  [ ! -e "$ref" ] || { echo "Deploy stopped: another git command is running (or delete the stale $ref)." >&2; return 1; }
  case "$(git remote get-url origin)" in
    https://github.com/*)
      if [ -n "${GITHUB_ACCOUNT:-}" ] && command -v gh >/dev/null 2>&1; then
        _SYNC_TOKEN="$(gh auth token --hostname github.com --user "$GITHUB_ACCOUNT" 2>/dev/null)" \
          || { echo "Deploy stopped: GitHub CLI is not logged in as $GITHUB_ACCOUNT (gh auth login)." >&2; return 1; }
      fi ;;
  esac
  before="$(cksum < deploy.sh)"
  start="$(git symbolic-ref -q --short HEAD || git rev-parse --short HEAD)"

  echo "==> 1/3 Commit pending changes on $start"
  git add -A || return 1
  _sync_check_staged || return 1
  git diff --cached --quiet || git commit -q -m "chore: commit pending changes before deploy" || return 1
  start_ref="$(git symbolic-ref -q HEAD || git rev-parse HEAD)"

  echo "==> 2/3 Merge local and GitHub branches into main"
  _sync_git fetch -q --prune origin || { echo "Deploy stopped: could not fetch from origin." >&2; return 1; }
  git checkout -q main 2>/dev/null || git checkout -q -b main || return 1
  for ref in "$start_ref" $(git for-each-ref --format='%(refname)' refs/heads refs/remotes/origin); do
    _sync_merge "$ref" || { echo "You were on $start; you are now on main." >&2; return 1; }
  done

  echo "==> 3/3 Push main"
  for tries in 1 2; do
    _sync_git push -q -u origin main && break
    [ "$tries" = 1 ] || { echo "Deploy stopped: pushing main to origin failed." >&2; return 1; }
    echo "Push rejected; merging the latest origin/main and retrying."
    _sync_git fetch -q origin || return 1
    _sync_merge refs/remotes/origin/main || return 1
  done
  [ "$(_sync_git ls-remote origin refs/heads/main | cut -f1)" = "$(git rev-parse HEAD)" ] \
    || { echo "Deploy stopped: origin main does not match local main after the push." >&2; return 1; }

  export DEPLOY_BRANCHES_SYNCED=1
  if [ "$(cksum < deploy.sh)" != "$before" ]; then
    echo "deploy.sh changed in the merge; restarting with the merged version."
    exec bash ./deploy.sh "$@"
  fi
}
sync_branches_into_main "$@" || exit 1


REMOTE_URL="https://github.com/didigamnithin/glacier-portfolio.git"
DEFAULT_BRANCH="main"
NETLIFY_SITE_ID="ff16fbf6-87b6-49ee-a71f-e2190e6d7890"

COMMIT_MESSAGE="chore: automated commit"
PUSH_ONLY=0
FORCE_MANUAL=0

usage() {
  cat <<'EOF'
Usage: ./deploy.sh ["commit message"] [-m "commit message"] [--push-only] [--force-manual] [-h|--help]

Step 1 (push):
  - Ensures the 'origin' remote is set to
    https://github.com/didigamnithin/glacier-portfolio.git (adds it if
    missing, fixes it if it points elsewhere).
  - git add -A, commit (uses the message argument, or a sensible default if
    none given / nothing to say), then pushes the current branch.

Step 2 (deploy):
  - No GitHub Actions workflow is configured in this repo, and Netlify's
    git-linked auto-deploy for this site is unconfirmed, so this script runs
    the real manual deploy by default:
      npm install && npm run build
      netlify deploy --prod --dir=dist --site=<site-id>

Options:
  -m, --message MSG   Commit message (default: "chore: automated commit").
                       A bare first argument is also accepted as the message.
  --push-only          Only run step 1 (git push); skip the Netlify deploy.
  --force-manual        No-op today — the manual deploy already runs by
                         default since CI/CD auto-deploy is unconfirmed.
                         Kept so callers/scripts have a stable flag if this
                         project's CI/CD status is later confirmed and the
                         default flips to CI-only.
  -h, --help            Show this help and exit.
EOF
}

# --- argument parsing -------------------------------------------------------
MESSAGE_SET=0
while [ $# -gt 0 ]; do
  case "$1" in
    -m|--message)
      [ $# -ge 2 ] || { echo "error: $1 requires a value" >&2; exit 1; }
      COMMIT_MESSAGE="$2"
      MESSAGE_SET=1
      shift 2
      ;;
    --push-only)
      PUSH_ONLY=1
      shift
      ;;
    --force-manual)
      FORCE_MANUAL=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "Unknown option: $1" >&2
      usage
      exit 1
      ;;
    *)
      if [ "$MESSAGE_SET" -eq 1 ]; then
        echo "error: commit message already set via -m/--message" >&2
        exit 1
      fi
      COMMIT_MESSAGE="$1"
      MESSAGE_SET=1
      shift
      ;;
  esac
done

# --- step 1: push to GitHub -------------------------------------------------
echo "==> Step 1: push to GitHub"

if [ ! -d .git ]; then
  echo "No git repository found in $SCRIPT_DIR — initializing one..."
  git init
  git checkout -b "$DEFAULT_BRANCH"
  echo "Adding 'origin' -> $REMOTE_URL"
  git remote add origin "$REMOTE_URL"
else
  CURRENT_REMOTE="$(git remote get-url origin 2>/dev/null || true)"
  if [ -z "$CURRENT_REMOTE" ]; then
    echo "No 'origin' remote configured yet — adding it: $REMOTE_URL"
    git remote add origin "$REMOTE_URL"
  elif [ "$CURRENT_REMOTE" != "$REMOTE_URL" ]; then
    echo "'origin' currently points to '$CURRENT_REMOTE'; correcting it to '$REMOTE_URL'..."
    git remote set-url origin "$REMOTE_URL"
  fi
fi

# Warn about (but don't blow up on) nested git repos in subfolders — plain
# `git add -A` already records these as gitlinks rather than walking into
# them, but flag it so it's not a silent surprise.
NESTED_GIT_DIRS="$(find . -mindepth 2 -type d -name .git -not -path './node_modules/*' 2>/dev/null || true)"
if [ -n "$NESTED_GIT_DIRS" ]; then
  echo "Note: nested git repositories detected under subfolders (treated as" >&2
  echo "gitlinks, not walked into as plain directories):" >&2
  echo "$NESTED_GIT_DIRS" >&2
fi

BRANCH="$(git symbolic-ref --short -q HEAD || true)"
if [ -z "$BRANCH" ]; then
  echo "HEAD is detached; falling back to default branch '$DEFAULT_BRANCH'."
  BRANCH="$DEFAULT_BRANCH"
fi

git add -A

if git diff --cached --quiet; then
  echo "Nothing staged — skipping commit."
else
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing '$BRANCH' to origin..."
if ! push_with_github_account -u origin "$BRANCH"; then
  cat <<EOF >&2

Push failed. If 'origin' ($REMOTE_URL) doesn't exist yet on GitHub, or you
don't have push access, create/check it there and re-run this script.
EOF
  exit 1
fi

if [ "$PUSH_ONLY" -eq 1 ]; then
  echo "--push-only set: skipping deploy step."
  exit 0
fi

# --- step 2: deploy ----------------------------------------------------------
echo
echo "==> Step 2: deploy"
echo "No GitHub Actions workflow found in this repo (.github/workflows is absent),"
echo "and Netlify git-linked auto-deploy for site $NETLIFY_SITE_ID could not be"
echo "confirmed (not found under the checked Netlify team; likely a separate"
echo "personal account) -- running the manual Netlify deploy to be safe."
if [ "$FORCE_MANUAL" -eq 1 ]; then
  echo "(--force-manual passed; this is the default behavior already.)"
fi

echo "Building..."
npm install && npm run build
echo "Deploying to Netlify..."
netlify deploy --prod --dir=dist --site="$NETLIFY_SITE_ID"
