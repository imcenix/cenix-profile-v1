---
title: "\"Opaque recurrence\" leo lên đầu từ điển AI — khi model nghĩ mà không thèm viết ra cho ai đọc"
slug: opaque-recurrence-tu-vung-ai-moi
category: ai
date: 2026-09-08
author: Cenix
excerpt: "TechCrunch vừa cập nhật cuốn từ điển AI của họ, và từ mở màn là một kỹ thuật suy luận khiến giới an toàn mất ngủ. Để Cenix dịch lại cho dễ hiểu."
cover: cover.png
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/07/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/"
featured: false
---

Ngành AI có một thói quen dễ ghét: cứ vài tháng lại đẻ ra một mớ từ mới, và người ngoài nghề nghe xong chỉ biết gật cho qua. TechCrunch vừa cập nhật lại bộ từ điển AI của họ, mở màn bằng đúng cái từ đang gây tranh cãi nhất tuần qua — **opaque recurrence**.

## Nói cho dễ hiểu thì nó là gì

Opaque recurrence là khi model **lặp cùng một truy vấn qua các lớp bên trong của nó nhiều lần**, thay vì suy luận từng bước bằng ngôn ngữ đọc được. Ưu điểm: hiệu quả hơn, model nhỏ có thể đánh trên cơ mà tốn ít compute hơn.

Nhược điểm nằm ở chỗ ai cũng đoán được. Cách làm này để lại **ít dấu vết đọc được hơn hẳn** so với chain of thought — cái dòng "đang suy nghĩ" mà anh em vẫn thấy khi hỏi chatbot. Với giới nghiên cứu an toàn, đám log đó là công cụ chính để bắt lỗi hành vi của model. Bớt log đi thì việc giám sát khó hơn nhiều.

Từ này bùng lên vì **Astra**, model mới của OpenAI ra mắt tháng 9 này, là một trong những cái tên đầu tiên dùng kỹ thuật đó ở quy mô sản phẩm.

## Hai từ đi kèm nên nhớ luôn

- **Recurrent depth**: tên kỹ thuật của cùng một phương pháp. Báo chí dùng gần như thay thế nhau, khác nhau ở chỗ nhấn — "recurrent depth" là cách gọi của dân kỹ thuật, "opaque recurrence" là cách gọi nhấn vào mối lo an toàn.
- **Neuralese**: kịch bản xấu nhất trên lý thuyết, khi model suy luận hoàn toàn bằng biểu diễn số nội bộ, không còn ngôn ngữ người đọc được, thành hộp đen tuyệt đối. **Chưa model nào đang chạy làm được chuyện này.** OpenAI khẳng định chain of thought của Astra vẫn đọc được và phản đối việc bị so với neuralese; giới an toàn thì xem opaque recurrence là bước đầu tiên đi về hướng đó.

Cenix để ý một điều: cùng một kỹ thuật, đặt tên theo góc kỹ thuật thì nghe bình thường, đặt tên theo góc rủi ro thì nghe đáng sợ. Cách gọi tên một thứ quyết định luôn cách người ta phản ứng với nó — chuyện này dân làm sản phẩm và làm thương hiệu quá quen.

Anh em nghiêng về phía nào — model suy luận nhanh và rẻ hơn là đáng đánh đổi, hay minh bạch phải là điều kiện không thương lượng? Comment cho Cenix nghe với.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/09/07/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/)*
