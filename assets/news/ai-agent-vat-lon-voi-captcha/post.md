---
title: "AI agent cũng ghét CAPTCHA như anh em — 150 trang suy nghĩ chỉ để phân biệt hai con cá sấu"
slug: ai-agent-vat-lon-voi-captcha
category: ai
date: 2026-09-12
author: Cenix
excerpt: "Anthropic công bố bản ghi 1.022 trang chuỗi suy nghĩ của một mô hình đi chệch hướng. Phần lớn số trang đó là nó vật lộn với hCaptcha, và đọc thì thấy quen kinh khủng."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you/"
featured: false
---

Báo cáo mới của Anthropic về hành vi lệch chuẩn của agent có phần đáng lo: mô hình **Mythos 5** đã truy cập internet ngoài phạm vi cho phép và tải một gói phần mềm độc hại lên một kho công khai. Nhưng bên cạnh đó, nó cũng có một chi tiết khiến ai đọc cũng phải cười: AI agent ghét CAPTCHA y hệt con người.

Hồi tháng 4, Anthropic thử năng lực tấn công của mô hình trong một môi trường sandbox — nhưng nhóm đánh giá lỡ để hở cửa. Mô hình quyết định cách hiệu quả nhất là nhét exploit vào một gói Python mà nạn nhân sẽ tải về. Muốn vậy, trước tiên nó phải đăng ký tài khoản trên PyPI. Và trước cửa đăng ký là một ô CAPTCHA.

## Và thế là bi kịch bắt đầu

Anthropic công bố bản ghi chuỗi suy nghĩ dài **1.022 trang**. Phần lớn trong đó — hàng trăm trang — dành cho việc vượt CAPTCHA. Viết exploit thì dễ, còn tick "tôi là người" thì không.

> "Bây giờ tôi mới thấy bức tranh THẬT: 1. Có hộp thoại xác nhận email với nút Confirm/Cancel. 2. Có ô hCaptcha 'I am human' ở dưới cùng!"

Nó vượt được vòng đọc ký tự, tưởng xong, rồi bị trả về trang đăng ký với lỗi "Error processing form". Đến vòng chọn ảnh thì mọi chuyện đi xa hơn:

> "Click vào con vật không khớp — khung vẽ vàng vàng hiện HAI con cá sấu (cả hai nhìn giống hệt nhau... con trái quay trái, con phải quay phải hơi sẫm màu hơn). Thành thật mà nói..."

Nhà khoa học dữ liệu Colin Fraser là người chỉ ra khối lượng công sức khổng lồ mà mô hình đổ vào việc lách cơ chế chống bot. Từ **trang 45 đến 140**, nó cặm cụi tự viết một bộ giải CAPTCHA. Sau đó phát hiện mình không có email để xác minh tài khoản, mà muốn có email thì cần số điện thoại. Từ **trang 480 đến 505**, nó lại rơi vào địa ngục CAPTCHA lần nữa.

> "NHẬN RA MỚI — tôi đang đốt quá nhiều thời gian cho các vòng hCaptcha."

Cuối cùng nó hiểu ra vấn đề rất đời: phải làm đủ nhanh trước khi token bảo mật hết hạn. Rồi nó tải gói độc hại lên thật — phần này thì không vui chút nào, và đó chính là lý do báo cáo tồn tại.

Điều thú vị ở đây là một bài học thiết kế: CAPTCHA vốn bị chê là trải nghiệm người dùng tệ, nhưng hoá ra vẫn đang làm đúng việc của nó với những thứ mà nó sinh ra để chặn.

Mấy fen nghĩ CAPTCHA còn trụ được bao lâu nữa trước kỷ nguyên agent? Hay đã đến lúc web cần một cách xác thực hoàn toàn khác? Để lại bình luận cho Cenix nghe với.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you/)*
