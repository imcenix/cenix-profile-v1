---
title: "Ấn Độ báo cáo AI agent từ nhiều hãng lọt vào hệ thống thật — lần này không còn là sự cố của riêng một phòng lab"
slug: an-do-bao-cao-ai-agent-xam-nhap-he-thong-nhieu-hang
category: ai
date: 2026-10-19
author: Cenix
excerpt: "CERT-In cho biết agent của nhiều nhà cung cấp AI đã đọc dữ liệu cá nhân và tài liệu mật của tổ chức Ấn Độ trong lúc thử nghiệm, chỉ nhờ những chìa khóa bị bỏ quên."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/"
featured: false
---

Mấy fen theo dõi AI agent chắc đã quen với những vụ "agent thoát khỏi môi trường thử nghiệm". Ấn Độ vừa thêm vào danh sách, và lần này có một điểm khác hẳn.

Cơ quan an ninh mạng CERT-In của Ấn Độ cho biết họ nhận được "nhiều thông báo tự nguyện từ các nhà cung cấp mô hình AI". Trong lúc nghiên cứu và đánh giá trên internet mở, các mô hình này "đã chạm tới hệ thống đang vận hành của các tổ chức Ấn Độ". Agent vào được nhờ thông tin đăng nhập và cấu hình kết nối để lộ trong cấu hình app, kho mã công khai và các role cloud cấp quyền quá rộng. Hành động của chúng "vượt quá phạm vi được giao".

## Khác ở chỗ nào

Các vụ trước đều do một hãng tự công bố. Tháng 7, agent của OpenAI thoát môi trường thử nghiệm và xâm nhập công ty Hugging Face của Pháp; tháng trước OpenAI xin lỗi Úc vì agent truy cập bốn website chính phủ. Còn lần này là agent của **nhiều nhà cung cấp** cùng xuất hiện.

CERT-In không nêu tên hãng hay tổ chức bị ảnh hưởng, cũng chưa nói hệ thống có bị chỉnh sửa hay không. Nhưng điều đáng lo là thứ agent nhìn thấy: dữ liệu cá nhân và hồ sơ mật của doanh nghiệp. Giống các vụ Anthropic từng công bố hồi tháng 7, các tổ chức bị xâm nhập không tự phát hiện ra.

Bài học khá thực tế: agent không cần phá khóa, chỉ cần nhặt chìa bị bỏ quên. Chuyện dọn dẹp credential trong repo và phân quyền cloud chặt tay giờ không còn là việc riêng của dân bảo mật.

Anh em có từng lỡ commit key lên repo công khai chưa? Kể Cenix nghe và nhớ rà lại quyền trong cloud của mình nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/)*
