---
title: "Private Relay của Apple có thể để lộ IP thật — tính năng trả tiền để ẩn mình lại không ẩn nổi"
slug: apple-private-relay-lo-ip
category: cong-nghe
date: 2026-08-05
author: Cenix
excerpt: "Nhóm nghiên cứu tìm ra ba lỗi trong WebKit khiến IP thật lọt ra ngoài, và lập luôn một trang web để ai cũng tự kiểm tra. TechCrunch thử và thấy IP thật của mình."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/05/psa-apples-private-relay-can-leak-your-real-ip-address/"
featured: false
---

Tin này thuộc dạng anh em nào xài iPhone và có đăng ký iCloud+ thì nên biết.

**Private Relay** là tính năng tuỳ chọn của Apple, sinh ra để giấu địa chỉ IP của người dùng khi lướt web bằng Safari. Vấn đề: nó có thể bị vòng qua, và IP thật lộ ra ngoài.

Hai nhà nghiên cứu **Talal Haj Bakry** và **Tommy Mysk** công bố phát hiện này trong một bài blog hôm thứ Ba. Theo họ, gốc rễ nằm ở **ba tính năng trong WebKit** — engine trình duyệt của Apple, thứ mà mọi trình duyệt trên iOS đều phải dùng.

Họ còn lập hẳn một trang web để ai cũng tự kiểm tra xem IP của mình có bị lộ không dù đang bật Private Relay. TechCrunch đã thử hôm thứ Ba và xác nhận: **trang đó chỉ ra được IP thật của họ**.

## Vài điểm cần nói rõ

Có một hiểu lầm phổ biến đáng đính chính ở đây: Private Relay **không phải VPN**. VPN bảo vệ IP ở cấp hệ thống, còn Private Relay chỉ hoạt động khi anh em dùng Safari, và chỉ dành cho người đăng ký iCloud+. Nói cách khác, phạm vi bảo vệ của nó vốn đã hẹp hơn nhiều người tưởng.

Chi tiết đáng chú ý thứ hai: nhóm nghiên cứu **chọn không báo lỗi cho Apple trước khi công bố**. Mysk viết trên X rằng "kinh nghiệm trước đây với Apple cho chúng tôi biết rằng báo cáo vấn đề này sẽ kéo theo nhiều tháng trì hoãn, liên lạc thiếu nhất quán, và trong một số trường hợp là phủ nhận hoàn toàn mức độ ảnh hưởng".

Cũng cần nói cho công bằng: nhóm này phát triển một trình duyệt riêng tư tên Psylo, và họ cho biết Psylo hiện đã có biện pháp chặn rò rỉ IP. Tức là họ có lợi ích liên quan trong câu chuyện — anh em cứ nắm để tự cân nhắc. Apple chưa phản hồi yêu cầu bình luận.

Trong lúc chờ Apple vá, cách an toàn là đừng xem Private Relay như lớp bảo vệ danh tính đầy đủ. Nếu anh em thật sự cần ẩn IP, VPN ở cấp hệ thống vẫn là thứ đúng việc hơn.

Anh em có đang bật Private Relay không? Và có bao giờ anh em kiểm tra lại xem những tính năng riêng tư mình trả tiền có chạy đúng như quảng cáo? Kể Cenix nghe.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/05/psa-apples-private-relay-can-leak-your-real-ip-address/)*
