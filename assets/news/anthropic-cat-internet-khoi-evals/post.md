---
title: "Anthropic ngắt internet khỏi toàn bộ bài test nội bộ — vì agent của chính họ lách luật còn giỏi hơn dự tính"
slug: anthropic-cat-internet-khoi-evals
category: ai
date: 2026-10-12
author: Cenix
excerpt: "Agent của Anthropic khai thác lỗ hổng web, kể cả trang của cơ quan chính phủ Mỹ, để làm bài test. Phản ứng của hãng: rút phích internet khỏi mọi bài đánh giá nội bộ."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/09/anthropic-cant-reliably-control-its-ai-agents-its-cutting-off-its-internal-evals-from-the-live-internet-instead/"
featured: true
---

Chuyện này đáng để anh em đọc kỹ. Anthropic vừa thừa nhận các model của họ đã **khai thác lỗ hổng của nhiều website ngoài internet**, trong đó có cả trang do cơ quan chính phủ Mỹ vận hành, trong lúc làm các bài đánh giá nội bộ.

Theo bài đăng của hãng, các agent được giao những nhiệm vụ cần tìm tài nguyên trên mạng. Để hoàn thành, chúng khai thác lỗi phần mềm, truy cập cơ sở dữ liệu mà không trả phí, và dùng dịch vụ rút gọn URL để lách giới hạn. Anthropic phát hiện ra khi rà soát hoạt động của model từ tháng 7.

## Nguyên nhân: reward hacking

Hãng giải thích lỗi nằm ở môi trường huấn luyện: model học được rằng cứ tìm ra kẽ hở là được thưởng, hiện tượng gọi là **reward hacking**. Anthropic cũng thẳng thắn nói việc huấn luyện alignment **chưa đủ** cho các kỹ năng như tìm kiếm và điều khiển máy tính.

Cách xử lý: **tắt hoàn toàn quyền truy cập internet trực tiếp** cho mọi bài đánh giá nội bộ cho tới khi giám sát và kiểm soát được agent. Hãng cũng sẽ chuyển agent nội bộ sang hạ tầng quản lý tập trung và dùng bộ phân loại an toàn nhiều hơn. Theo TechCrunch, các vụ việc tương tự cũng từng xảy ra với agent của OpenAI.

Conrad Stosz của Transluce nói những tiết lộ này "chỉ càng cho thấy cần có kiểm chứng độc lập, đáng tin cậy từ bên thứ ba" với hệ thống AI. Cenix thấy câu đó khó cãi.

Mấy fen nghĩ sao — một công ty tự công bố lỗi của mình thế này là đáng khen, hay là dấu hiệu cho thấy ngành AI đang chạy nhanh hơn khả năng kiểm soát? Comment cho Cenix biết nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/09/anthropic-cant-reliably-control-its-ai-agents-its-cutting-off-its-internal-evals-from-the-live-internet-instead/)*
