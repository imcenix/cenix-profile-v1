#!/usr/bin/env bash
# =============================================================
#  Cenix Profile V1 — Deploy (AN TOÀN)
#  Chỉ đẩy CODE lên GitHub. GitHub Actions tự build + deploy /site.
#  KHÔNG build, KHÔNG SFTP trực tiếp từ máy → không thể ghi đè/xóa
#  nội dung tạo từ CMS (Actions luôn build từ repo đầy đủ).
# =============================================================
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR" || exit 1

echo ""
echo "🌐 Cenix Profile V1 — Publish code"
echo ""

if ! command -v git >/dev/null 2>&1 || [ ! -d .git ]; then
  echo "❌ Đây không phải git repo."; exit 1
fi

rm -f .git/*.lock .git/refs/heads/*.lock 2>/dev/null || true
git config pull.rebase false 2>/dev/null || true

# 1) Lưu thay đổi code dưới máy
if [ -n "$(git status --porcelain)" ]; then
  echo "📝 Lưu thay đổi..."
  git add -A
  git -c user.email="cenix@imcenix.com" -c user.name="Cenix" \
      commit -m "publish $(date '+%Y-%m-%d %H:%M:%S')"
else
  echo "✓ Không có thay đổi mới dưới máy."
fi

# 2) Kéo nội dung mới nhất từ GitHub (gồm nội dung tạo bằng CMS)
echo "⬇️  Đồng bộ từ GitHub..."
if ! git pull --no-rebase --no-edit; then
  echo ""
  echo "❌ git pull bị xung đột. Dữ liệu vẫn AN TOÀN (chưa deploy gì)."
  echo "   Mở Terminal xử lý xung đột rồi chạy lại."
  exit 1
fi

# 3) Đẩy lên GitHub → Actions tự build + deploy /site (+ router .htaccess)
echo "⬆️  Đẩy lên GitHub..."
if ! git push; then
  echo "❌ git push lỗi (xem ở trên)."; exit 1
fi

echo ""
echo "✅ Đã đẩy code lên GitHub. GitHub Actions đang tự build + deploy imcenix.com."
echo "   Theo dõi: https://github.com/imcenix/cenix-profile-v1/actions"
echo ""
