---
title: "Meta ra Muse Code đấu Claude Code và Codex — kẻ đi sau chọn đánh bằng giá"
slug: meta-muse-code-agent-lap-trinh
category: ai
date: 2026-08-05
author: Cenix
excerpt: "Zuckerberg khoe agent mới tự tách thành nhiều sub-agent chạy song song, dựng sáu tính năng game cùng lúc mà không đụng nhau. Vũ khí chính không phải tốc độ, mà là chi phí."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/"
featured: false
---

Meta lâu nay bị xem là kẻ chậm chân trong mảng công cụ AI cho lập trình viên. Tuần này họ có động thái đuổi theo: ra mắt **Muse Code**, một terminal coding agent nhắm vào những ai phải xử lý tác vụ phức tạp trên codebase lớn.

Muse Code hiện ở giai đoạn beta. Mark Zuckerberg nói agent này có thể hoàn thành "trọn vẹn các tác vụ kỹ thuật phần mềm trên những repo lớn" — bao gồm **lên kế hoạch thay đổi, viết code, và kiểm chứng kết quả**. Cài đặt chỉ bằng một câu lệnh, và nó chạy trên mô hình lập trình mà Meta đã phát hành trước đó, **Muse Spark**.

## Cách nó xử lý việc lớn

Đây là phần đáng để dân code chú ý. Zuckerberg mô tả:

> "Khi một công việc đủ lớn, nó toả ra thành các sub-agent riêng chạy song song trong những worktree tách biệt. Bản làm việc của bạn không bao giờ bị đụng tới. Trong thử nghiệm, chúng tôi cho nó dựng sáu tính năng cho một game cùng lúc mà không xung đột."

Ai từng để agent chạy trên repo lớn đều hiểu vấn đề: không phải model dốt, mà là nhiều thay đổi giẫm chân nhau. Cách tách worktree song song là giải pháp kỹ thuật khá gọn cho chuyện đó.

Về định vị, Muse Code nhắm thẳng vào **Codex của OpenAI** và **Claude Code của Anthropic**. Nhưng Meta không đua tính năng — họ đua giá. Alexandr Wang, giám đốc AI của Meta và người dẫn dắt Meta Superintelligence Labs, nói với Wall Street Journal:

> "Chúng tôi nghĩ với nhiều luồng công việc và nhiều tình huống sử dụng, đây có thể là lựa chọn cực tốt, nhất là xét về mặt chi phí."

Chiến lược này không mới với Meta — họ từng dùng đúng cách đó với dòng model mở. Và trong bối cảnh chi phí token đang là mối bận tâm thật của các đội kỹ thuật, đánh vào giá không phải nước cờ tệ.

Anh em đang xài agent nào để code? Có sẵn sàng đổi sang thứ rẻ hơn nếu chất lượng chỉ kém một chút không? Kể Cenix nghe.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/)*
