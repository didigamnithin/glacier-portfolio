#!/usr/bin/env bash
#
# Stop the Vite dev server started by ./run.sh (npm install && npm run dev).
# Usage: ./stop.sh [-h|--help]
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-5173}"

for arg in "$@"; do
  case "$arg" in
    -h|--help)
      echo "Usage: ./stop.sh"
      echo "  Stops the Vite dev server for nithin (glacier-portfolio), default port 5173"
      echo "  (Vite's default; there is no custom port in vite.config.js)."
      echo "  Only stops processes that look like this project's Vite instance."
      exit 0
      ;;
    *)
      echo "Unknown option: $arg (try --help)"
      exit 1
      ;;
  esac
done

cd "$ROOT_DIR"

if ! command -v lsof >/dev/null 2>&1; then
  echo "lsof not found; cannot detect a running server."
  exit 1
fi

is_our_process() {
  local pid="$1"
  local cmd
  cmd="$(ps -ww -p "$pid" -o command= 2>/dev/null || true)"
  [[ -z "$cmd" ]] && return 1
  # node_modules/.bin/vite is installed locally, so the full project path
  # normally shows up in the command line.
  [[ "$cmd" == *"$ROOT_DIR"* ]] && return 0
  [[ "$cmd" == *"vite"* ]] && return 0
  return 1
}

pids="$(lsof -ti ":$PORT" 2>/dev/null || true)"

if [[ -z "$pids" ]]; then
  echo "No process found on port $PORT. nithin's dev server doesn't appear to be running."
  exit 0
fi

found=0
for pid in $pids; do
  if is_our_process "$pid"; then
    found=1
    echo "Stopping nithin dev server (pid $pid, port $PORT)..."
    kill -TERM "$pid" 2>/dev/null || true
    for _ in 1 2 3 4 5 6 7 8 9 10; do
      kill -0 "$pid" 2>/dev/null || break
      sleep 0.3
    done
    if kill -0 "$pid" 2>/dev/null; then
      echo "  still running, sending SIGKILL..."
      kill -KILL "$pid" 2>/dev/null || true
    fi
    echo "  stopped."
  fi
done

if [[ "$found" == 0 ]]; then
  echo "Port $PORT is in use by a process that doesn't look like nithin's Vite dev server; leaving it running."
fi
