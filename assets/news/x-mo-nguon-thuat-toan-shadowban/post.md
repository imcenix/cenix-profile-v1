---
title: "X mở mã nguồn thuật toán For You — giờ anh em tự kiểm tra mình có bị bóp không"
slug: x-mo-nguon-thuat-toan-shadowban
category: cong-nghe
date: 2026-08-14
author: Cenix
excerpt: "Codebase phình to gấp 10–15 lần, kèm công cụ cho phép tải về file JSON xem tài khoản mình bị gắn nhãn gì. VP sản phẩm nói ai cũng sẽ sốc."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/"
featured: false
---

Chuyện "shadowban" trên mạng xã hội xưa nay toàn là đồn đoán. Hôm thứ Năm, X quyết định đưa thẳng mã nguồn ra cho mọi người soi.

Công ty công bố mã nguồn của dòng thời gian **"For You"** trên GitHub theo giấy phép Apache v2. Lần này không chỉ là phần khung: họ bổ sung cấu hình model, bộ lọc và chi tiết hệ thống xếp hạng lõi — bao gồm cả các tham số dùng để đánh trọng số từng tín hiệu, thứ quyết định bài nào thực sự được hiển thị. Kết quả là codebase lớn hơn trước khoảng **10 đến 15 lần**.

> "Anh sẽ có được phần mã xếp hạng lõi, thứ kéo bài về, chấm điểm cho từng người dùng rồi lắp thành feed" — Keith Coleman, VP sản phẩm của X, nói với TechCrunch. "Đây là kiểu thứ mà tôi nghĩ mọi người sẽ khá sốc khi thấy chúng tôi công bố."

## Tự soi tài khoản của mình

Kèm theo là một công cụ minh bạch nằm trong trang "Under the Hood" ở phần cài đặt. Ai đã đăng từ **10 bài trở lên** trong tháng qua có thể tải về thống kê tổng hợp dưới dạng file JSON, cho biết tài khoản hoặc bài viết của mình có bị gắn nhãn nào trong tháng dương lịch vừa rồi không.

Người không rành kỹ thuật thì cứ quăng file đó vào một LLM bất kỳ, trỏ nó tới repo GitHub của X rồi hỏi cách diễn giải. Công cụ ban đầu chỉ chạy thử với nhóm tài khoản đã tồn tại ít nhất một năm, sau đó mới mở rộng.

Vài hệ thống vẫn nằm ngoài bản công bố — ví dụ phần dùng Grok để dự đoán một bài có vi phạm quy định hay không. X giữ lại để tránh việc kẻ xấu lách luật rồi spam ngập nền tảng.

Đáng chú ý: giới nghiên cứu bên ngoài được xem trước và đã tự huấn luyện, tự chạy được hệ thống chấm điểm **Phoenix** bằng mã nguồn mở này. Coleman cũng nói X sẽ cân nhắc nhận pull request từ cộng đồng để cải tiến thuật toán.

Cenix thấy nước đi này thú vị ở chỗ nó biến một hộp đen thành thứ có thể tranh luận bằng bằng chứng, thay vì bằng cảm giác. Dĩ nhiên, mở mã không đồng nghĩa với minh bạch toàn diện — cách vận hành thực tế vẫn nằm ở dữ liệu và hạ tầng bên trong.

Mấy fen có định tải file JSON về soi tài khoản mình không? Ai làm rồi thì comment kết quả cho anh em tham khảo nha.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/)*
