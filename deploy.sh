#!/usr/bin/env bash
# =============================================================
#  Cenix Profile — Astro build + SFTP deployment
#  1. Runs `npm run build` to produce ./dist
#  2. Mirrors ./dist to remote public_html via SFTP
#  Credentials live in .env (gitignored).
# =============================================================

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# ----- Load .env -----
if [ ! -f .env ]; then
  echo "Missing .env in $SCRIPT_DIR"
  echo "   Copy .env.example to .env and fill in credentials."
  exit 1
fi

set -a
# shellcheck disable=SC1091
. ./.env
set +a

: "${SFTP_HOST:?Missing SFTP_HOST in .env}"
: "${SFTP_USER:?Missing SFTP_USER in .env}"
: "${SFTP_PASSWORD:?Missing SFTP_PASSWORD in .env}"
: "${SFTP_REMOTE_PATH:?Missing SFTP_REMOTE_PATH in .env}"
SFTP_PORT="${SFTP_PORT:-22}"

# ----- Astro build -----
if [ ! -d node_modules ]; then
  echo "Installing dependencies (first run only)..."
  npm install
fi

echo "Building site with Astro..."
npm run build

if [ ! -d dist ]; then
  echo "Build failed: ./dist not found"
  exit 1
fi

echo "Build complete. ./dist size: $(du -sh dist | cut -f1)"

# ----- Upload ./dist via SFTP -----
LOCAL_SRC="./dist/"

echo "Deploying ${SITE_DOMAIN:-site} -> ${SFTP_HOST}:${SFTP_REMOTE_PATH}"

if command -v lftp >/dev/null 2>&1; then
  echo "Using lftp..."

  lftp -u "$SFTP_USER,$SFTP_PASSWORD" -p "$SFTP_PORT" "sftp://$SFTP_HOST" <<EOF
set sftp:auto-confirm yes
set net:max-retries 2
set net:timeout 15
mirror --reverse --verbose --delete --parallel=4 \
  --exclude-glob .DS_Store \
  --exclude-glob *.log \
  $LOCAL_SRC "$SFTP_REMOTE_PATH"
bye
EOF
  echo "Deploy complete -> https://${SITE_DOMAIN:-your-domain}"
  exit 0
fi

if command -v sshpass >/dev/null 2>&1 && command -v rsync >/dev/null 2>&1; then
  echo "Using rsync + sshpass..."
  sshpass -p "$SFTP_PASSWORD" rsync -avz --delete \
    --exclude='.DS_Store' --exclude='*.log' \
    -e "ssh -p $SFTP_PORT -o StrictHostKeyChecking=accept-new" \
    "$LOCAL_SRC" "$SFTP_USER@$SFTP_HOST:$SFTP_REMOTE_PATH"
  echo "Deploy complete -> https://${SITE_DOMAIN:-your-domain}"
  exit 0
fi

cat <<MSG
Neither 'lftp' nor 'sshpass + rsync' is installed.

Install one of these on macOS (Homebrew):

   # Recommended:
   brew install lftp

   # Or:
   brew install hudochenkov/sshpass/sshpass

Then run ./deploy.sh again.
MSG
exit 1
