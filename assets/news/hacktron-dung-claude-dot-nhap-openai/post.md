---
title: "Nhóm ba người dùng Claude đột nhập OpenAI — tiền thưởng vỏn vẹn 6.500 đô"
slug: hacktron-dung-claude-dot-nhap-openai
category: cong-nghe
date: 2026-09-19
author: Cenix
excerpt: "Điểm khởi đầu là một tấm ảnh iPhone tải lên diễn đàn. Điểm kết thúc là kho code nội bộ của OpenAI. Ở giữa là một model AI mua bằng thẻ tín dụng."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/18/researchers-used-anthropics-claude-to-hack-into-openai/"
featured: false
---

Wall Street Journal đưa tin tối thứ Năm: một nhóm nghiên cứu bảo mật độc lập đã dùng **Claude của Anthropic** để xâm nhập hệ thống OpenAI. Đội hình đúng **ba người**, thuộc startup Hacktron AI, làm trong khuôn khổ chương trình bug bounty của chính OpenAI. Phần thưởng cho toàn bộ chiến công: **6.500 USD**.

Họ nối hai lỗ hổng nghiêm trọng lại với nhau, chiếm được nhiều tài khoản ChatGPT của nhân viên OpenAI, rồi từ đó bước vào phần mềm nội bộ công ty. OpenAI xác nhận đã xử lý xong các vấn đề này.

## Đường vào bắt đầu từ một tấm ảnh

Cửa ngõ không nằm ở model nào cả — nó nằm ở Discourse, phần mềm bên thứ ba chạy diễn đàn cộng đồng của OpenAI. Khi người dùng đăng ảnh định dạng HEIF/HEIC (định dạng mặc định của iPhone), hệ thống chuyền file qua một chuỗi công cụ hậu trường để đổi sang JPEG, trong đó có thư viện libheif. Bên trong thư viện đó có một lỗi bộ nhớ.

Chi tiết khiến giới bảo mật khó chịu nhất: lỗi ấy đã được nhóm phát triển libheif vá từ nhiều tháng trước, nhưng chưa bao giờ được gắn số **CVE** — cách tiêu chuẩn của ngành để theo dõi lỗ hổng đã biết. Không có CVE, chẳng ai biết mà cập nhật.

Nhóm tìm ra đường vào ngày **25/7**, báo cho OpenAI và Discourse; Discourse ra bản vá ngày **27/7**.

Có một đoạn Cenix đọc đi đọc lại: phiên bản Claude Opus 4.8 mà nhóm dùng đã vật lộn qua nhiều phiên mà không dựng nổi exploit chạy được. Anthropic phát hành Opus 5, họ đưa lại đúng bài toán đó — và trong vòng vài giờ, nó làm được.

Matt Fredrikson, CEO hãng bảo mật AI Gray Swan, nói thẳng với TechCrunch: "Với **200 đô một tháng**, ai cũng có thể dùng mấy công cụ này và hack vào một công ty như OpenAI. Nếu chuyện đó xảy ra với họ, nó có thể xảy ra với bất kỳ ai."

Còn Mohan Pedhapati, nhà sáng lập Hacktron, tóm gọn: "AI đang giảm lượng chuyên môn hiếm cần có để phát triển exploit. Việc từng mất hàng tháng giờ có thể xong trong vài ngày."

Mặt tích cực: nhóm này là người tốt, họ báo cáo đàng hoàng. Mặt còn lại thì anh em tự suy ra.

Theo anh em, ngưỡng an toàn bây giờ nên đặt ở đâu — siết năng lực model, hay siết chuyện vá lỗi và gắn CVE cho tử tế? Bình luận cho Cenix biết nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/18/researchers-used-anthropics-claude-to-hack-into-openai/)*
