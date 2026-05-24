# Workflow viết bài cho imcenix.com

> Mac-only workflow. Phone editing có thể setup sau khi mua Obsidian Sync
> ($4/tháng) hoặc dùng Apple Notes làm bản nháp rồi paste vào Obsidian Mac.

## Setup ban đầu

**1. Project path:**

```
~/Documents/Cenix_Projects/Cenix/Cenix x Claude/Cenix Profile/
```

**2. Terminal alias** (đã có trong `~/.zshrc`, nếu chưa thì thêm vào):

```bash
alias cenix='cd "$HOME/Documents/Cenix_Projects/Cenix/Cenix x Claude/Cenix Profile"'
```

Sau khi thêm: `source ~/.zshrc` để reload. Từ giờ gõ `cenix` là vào thẳng project.

**3. Obsidian Mac:**

- Mở Obsidian.app → Open vault → Open folder as vault
- Navigate Files → Documents → Cenix_Projects → Cenix → Cenix x Claude → **Cenix Profile**
- Open

## Cấu trúc folder vault

```
Cenix Profile/
├─ _WORKFLOW.md           ← file này
├─ Publish.command        ← double-click để deploy
├─ .obsidian/
│  └─ templates/          ← 4 template insert sẵn
├─ assets/
│  ├─ blog/               ← TẠO POST MỚI Ở ĐÂY
│  │  ├─ _template/       ← không sửa, để tham khảo
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

## Tạo bài Blog mới

### Bước 1 — Tạo folder cho post

Trong Obsidian Mac, right-click folder `assets/blog/` → **New folder** → đặt tên theo format:

```
YYYY-MM-slug-bai
```

Ví dụ: `2026-04-hanh-trinh-du-lich-mien-trung`

### Bước 2 — Tạo file `post.md`

Vào folder vừa tạo → **New note** → đặt tên **`post`** (chỉ "post", Obsidian tự thêm `.md`).

### Bước 3 — Insert template

Mở file `post.md` → **Cmd+P** (command palette) → gõ **"Insert template"** → chọn:

- **Blog Article** — bài viết text dài
- **Blog V-Log** — embed video YouTube
- **Blog Reel** — embed FB Reel / TikTok / YouTube Shorts

Template tự fill date hôm nay. Anh sửa **title**, **slug**, **excerpt**.

### Bước 4 — Thumbnail

Drag file ảnh từ Desktop/Finder vào folder post trong Obsidian sidebar. Đặt tên là **`thumbnail.jpg`** (hoặc `.png`).

### Bước 5 — Publish

**Cách A — Double-click Publish.command:**

Trong Finder hoặc Obsidian, double-click file `Publish.command` ở root project.

**Cách B — Terminal:**

```bash
cenix
./Publish.command
```

Site update tại imcenix.com trong ~60 giây.

---

## Tạo Portfolio project mới

Tương tự bước Blog nhưng:

- Folder: `assets/portfolio/XX-ten-project/` (XX = số thứ tự)
- File: `project.md`
- Template: **Portfolio Project** (Cmd+P → Insert template)
- Thumbnail: `thumbnail.png` (tỷ lệ 1.28:1, chuẩn Behance)
- Long mockup: `images/long-mockup.png`

---

## Cập nhật About Me

3 file ở `assets/about-me/`:

- **About Me.md** — quote + bio ngắn + bio dài
- **Experience.md** — danh sách công ty (mỗi h2 = 1 công ty)
- **Projects.md** — side projects (mỗi h2 = 1 project)

Edit trực tiếp các file. Publish như trên.

---

## Quay xe (Git rollback)

Mỗi lần `./Publish.command` chạy, git tự commit snapshot. Nếu lỡ xoá hay sửa hỏng:

```bash
cenix
git log --oneline                # xem history các deploy
git checkout abc1234 -- assets/  # restore folder assets từ commit cũ
# HOẶC quay HẲN về snapshot cũ:
git reset --hard abc1234         # cẩn thận! mất commits sau đó
```

---

## Quy tắc đặt slug

Slug là URL bài viết / project. Phải:

- Lowercase: `hanh-trinh-du-lich` ✓ không phải `Hanh-Trinh-Du-Lich`
- Dùng dấu gạch ngang `-`, không dùng `_` hay space
- Không dấu tiếng Việt: `hanh-trinh` ✓ không phải `hành-trình`
- Ngắn gọn 3-6 từ

---

## Sau này nếu muốn viết trên phone

3 lựa chọn:

1. **Obsidian Sync** ($4/tháng) — official, hoàn hảo, không phải fight iCloud
2. **GitHub + Working Copy** (~$20 one-time iOS app) — git-based sync, advanced
3. **Self-hosted CMS** — em build sau khi anh cần thiết
