#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "Installing dependencies..."
npm install

echo "Starting dev server (Ctrl+C to stop)..."
exec npm run dev
