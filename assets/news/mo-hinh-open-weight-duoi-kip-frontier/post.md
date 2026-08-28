---
title: "Mô hình mở đã gần đuổi kịp frontier — nhưng phần phanh thì vẫn bỏ ngỏ"
slug: mo-hinh-open-weight-duoi-kip-frontier
category: ai
date: 2026-08-04
author: Cenix
excerpt: "Báo cáo mới của SaferAI cho thấy GLM-5.2 của Z.ai chỉ còn cách các mô hình dẫn đầu vài tháng về năng lực — nhưng từ chối gần như không có bài kiểm tra an toàn nào."
cover: cover.png
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/"
featured: false
---

Trong lúc giới làm chính sách còn tranh luận cách quản các hệ thống AI ngày càng mạnh, một mô hình open-weight của Trung Quốc đã rút ngắn khoảng cách với nhóm dẫn đầu.

Theo báo cáo mới từ tổ chức phi lợi nhuận về an toàn AI **SaferAI**, mô hình **GLM-5.2** của Z.ai chỉ còn cách GPT-5.5 của OpenAI và Claude Opus 4.7 của Anthropic **vài tháng** về năng lực trong lĩnh vực an ninh mạng và sinh học.

Nhưng phần đáng chú ý nằm ở chỗ khác.

## Năng lực đuổi kịp, phanh thì không

Khi SaferAI chạy đánh giá qua API công khai của Z.ai, GLM-5.2 **không từ chối bất kỳ tác vụ nào** trong nhóm tấn công mạng và sinh học lưỡng dụng. Để so sánh: Claude Opus 4.7 "từ chối kiên định tới mức SaferAI không hoàn thành nổi bài CyberGym trên nó".

> "Biên giới của năng lực không phải là biên giới của rủi ro. Muốn đánh giá rủi ro cho đúng, ta phải tính cả trạng thái của các biện pháp giảm thiểu." — Henry Papadatos, giám đốc điều hành SaferAI

Vấn đề cốt lõi của mô hình open-weight: Z.ai có thể gắn hàng rào an toàn lên API do họ vận hành, nhưng một khi ai đó tải trọng số về chạy trên máy riêng thì mọi hàng rào đều có thể gỡ, tinh chỉnh hoặc thay system prompt.

Công bằng mà nói, hàng rào của mô hình đóng cũng không phải bất khả xâm phạm — tổ chức Far.ai đã tìm ra hàng trăm jailbreak dùng lại được trên các mô hình frontier như Grok 4.5 và Gemini 3.1 Pro. Nhưng ít nhất chúng còn tồn tại để mà phá.

Phía ủng hộ mô hình mở có lập luận mạnh: chính GLM-5.2 là thứ Hugging Face dùng để tự vệ trước vụ đột nhập của mô hình OpenAI tháng trước. CEO Hugging Face Clem Delangue nói các hệ thống từng chặn một cuộc tấn công AI giờ có thể chặn hàng triệu cuộc mỗi ngày. Papadatos cho rằng lợi ích đó thường bị nói quá, và chốt một câu đáng ngẫm:

> "Mặc định thì kẻ tấn công áp dụng công cụ mới nhanh hơn bên phòng thủ. Một nhóm ransomware có thể đổi cách làm trong một tuần. Một bệnh viện thì không."

SaferAI cho biết Z.ai không công bố khung an toàn, cam kết kiểm thử trước triển khai hay đánh giá rủi ro nào cho mô hình này.

Anh em nghiêng về phía nào: mở trọng số để cả làng cùng phòng thủ, hay giữ lại vì rủi ro quá lớn? Comment cho Cenix biết nha mấy fen.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/)*
