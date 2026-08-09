---
title: "Framework báo lộ dữ liệu toàn bộ khách hàng — lỗ hổng nằm ở nhà cung cấp"
slug: framework-lo-du-lieu-toan-bo-khach-hang
category: cong-nghe
date: 2026-08-09
author: Cenix
excerpt: "Hãng laptop module hoá gửi mail cho tất cả khách. Nguồn rò rỉ không nằm trong hệ thống của họ."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/07/computer-maker-framework-notifies-all-customers-of-a-data-breach/"
featured: false
---

Framework — hãng làm laptop module hoá, sửa chữa được, vốn được cộng đồng kỹ thuật yêu quý — vừa thông báo cho khách hàng về một vụ rò rỉ dữ liệu.

Thông tin bị lấy gồm **họ tên, email, số điện thoại và địa chỉ nhà**. Thông tin thanh toán không nằm trong số đó. Người phát ngôn Eric Schumacher xác nhận với TechCrunch rằng vụ việc ảnh hưởng tới **"tất cả khách hàng"**, nhưng từ chối nêu con số cụ thể. Framework là sản phẩm khá ngách, dù vậy một số ước tính cho rằng hãng đã bán hàng trăm nghìn máy.

## Gốc rễ nằm ở đâu

Framework quy trách nhiệm cho một cuộc tấn công ở tuyến trên: **Metabase**, công ty cung cấp dịch vụ business intelligence. Metabase đã tự công bố sự cố trên blog chính thức, cho biết bị khai thác qua một lỗ hổng chưa từng được biết đến — tức **zero-day** — cho phép kẻ tấn công truy cập cơ sở dữ liệu khách hàng lưu trên máy chủ đám mây của Metabase.

Trong email gửi khách, Framework đính kèm luôn thư mà Metabase gửi cho họ, xác nhận hacker đã vào được instance đám mây của Framework. Sau khi tự điều tra, Framework kết luận dữ liệu cá nhân khách hàng đã bị lấy. Metabase chưa phản hồi đề nghị bình luận.

Chuyện này đáng lưu ý với bất kỳ ai đang vận hành sản phẩm: bạn có thể siết bảo mật hệ thống của mình rất kỹ, nhưng bề mặt tấn công thật sự bao gồm cả mọi dịch vụ bên thứ ba mà bạn cắm dữ liệu vào. Đây là vụ rò rỉ của Framework, nhưng cửa mở lại nằm ở nhà khác.

Nếu anh em từng mua Framework thì nên cảnh giác với email và cuộc gọi giả danh trong thời gian tới, vì bộ dữ liệu kiểu này rất hợp cho lừa đảo nhắm mục tiêu.

Anh em đang dùng bao nhiêu dịch vụ bên thứ ba có giữ dữ liệu khách của mình — có bao giờ ngồi kiểm lại danh sách đó chưa? Chia sẻ với Cenix nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/07/computer-maker-framework-notifies-all-customers-of-a-data-breach/)*
