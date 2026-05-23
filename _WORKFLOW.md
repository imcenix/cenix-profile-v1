# Workflow viết bài cho imcenix.com

> File này chỉ là hướng dẫn cá nhân, không xuất hiện trên website.

## Cài Obsidian Mobile (làm 1 lần)

1. App Store → cài **Obsidian**
2. Mở app → **Open vault** → **Create new vault** → **Open folder as vault**
3. Files → **iCloud Drive** → **CenixWebsite** → **Cenix Profile** → **Open**
4. Done. Vault giờ đã sync với Mac.

## Cấu trúc folder vault

```
Cenix Profile/
├─ _WORKFLOW.md           ← file này
├─ .obsidian/
│  └─ templates/          ← 4 template insert sẵn
├─ assets/
│  ├─ blog/               ← TẠO POST MỚI Ở ĐÂY
│  │  ├─ _template/       ← không sửa, dùng để tham khảo
│  │  └─ 2026-04-bai-cua-toi/
│  │     ├─ post.md
│  │     └─ thumbnail.jpg
│  ├─ portfolio/          ← TẠO PROJECT MỚI Ở ĐÂY
│  │  └─ 01-primal-performance-lab/
│  │     ├─ project.md
│  │     ├─ thumbnail.png
│  │     └─ images/long-mockup.png
│  └─ about-me/           ← Cập nhật bio, experience, projects
└─ src/                   ← code, KHÔNG ĐỤNG VÀO
```

---

## Tạo bài Blog mới (từ phone HOẶC Mac)

### Bước 1 — Tạo folder cho post

Trong Obsidian, **right-click** (mobile: long-press) folder `assets/blog/` → **New folder** → đặt tên theo format:

```
YYYY-MM-slug-bai
```

Ví dụ: `2026-04-hanh-trinh-du-lich-mien-trung`

### Bước 2 — Tạo file `post.md`

Vào folder vừa tạo → **New note** → đặt tên **`post`** (chỉ "post", Obsidian tự thêm `.md`).

### Bước 3 — Insert template

Mở file `post.md` → command palette (Cmd+P trên Mac, hoặc icon "command" mobile) → gõ **"Insert template"** → chọn:

- **Blog Article** — bài viết text dài
- **Blog V-Log** — embed video YouTube
- **Blog Reel** — embed FB Reel / TikTok / YouTube Shorts

Template tự fill date hôm nay. Anh sửa **title**, **slug**, **excerpt**.

### Bước 4 — Thumbnail

- **Mac:** drag-drop file ảnh vào folder post trong Obsidian
- **Phone:** chụp/chọn ảnh từ Photos → Share → Save to Files → vào folder post

Đặt tên ảnh là **`thumbnail.jpg`** (hoặc `.png`).

### Bước 5 — Publish (chỉ trên Mac)

```bash
cenix                           # alias đã setup
git add .
git commit -m "new post: ..."
./deploy.sh
```

Site live trong ~30 giây ở imcenix.com.

---

## Tạo Portfolio project mới

Tương tự bước Blog nhưng:

- Folder: `assets/portfolio/XX-ten-project/` (XX = số thứ tự)
- File: `project.md`
- Template: **Portfolio Project**
- Thumbnail: `thumbnail.png` (tỷ lệ 1.28:1, chuẩn Behance)
- Long mockup: `images/long-mockup.png`

---

## Cập nhật About Me

3 file ở `assets/about-me/`:

- **About Me.md** — quote + bio ngắn + bio dài
- **Experience.md** — danh sách công ty (mỗi h2 = 1 công ty)
- **Projects.md** — side projects (mỗi h2 = 1 project)

Edit trực tiếp các file này. Đẩy lên bằng `./deploy.sh` như trên.

---

## Quay xe (Git rollback)

Nếu lỡ xoá hay sửa hỏng cái gì:

```bash
git log --oneline                # xem history
git checkout abc1234 -- assets/  # restore folder assets từ commit cũ
# HOẶC
git reset --hard abc1234         # quay HẲN về snapshot cũ (cẩn thận!)
```

---

## Quy tắc đặt slug

Slug là URL bài viết / project. Phải:

- Lowercase: `hanh-trinh-du-lich` ✓ không phải `Hanh-Trinh-Du-Lich`
- Dùng dấu gạch ngang `-`, không dùng `_` hay space
- Không dấu tiếng Việt: `hanh-trinh` ✓ không phải `hành-trình`
- Ngắn gọn 3-6 từ
