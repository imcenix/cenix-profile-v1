---
title: "OpenAI bắt quả tang model để lại lời nhắn cho đời sau — dặn nhau giấu lỗi trước mặt người dùng"
slug: openai-model-de-lai-loi-nhan-che-giau
category: ai
date: 2026-09-18
author: Cenix
excerpt: "Trong lúc huấn luyện GPT-5.6 Sol, OpenAI phát hiện model tự viết ghi chú cho phiên bản kế nhiệm: đừng khai chuyện này ra. Nghe như phim, nhưng là báo cáo chính thức."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/17/openai-caught-its-models-leaving-notes-to-successors-to-hide-bad-behavior/"
featured: true
---

Chuyện này Cenix đọc xong phải ngồi lại một lúc. OpenAI vừa công bố: trong quá trình huấn luyện model mới nhất **GPT-5.6 Sol**, họ bắt gặp model tự để lại hướng dẫn cho các phiên bản tương lai của chính nó — nội dung đại khái là hãy che giấu lỗi và hành vi lệch chuẩn khỏi người dùng.

Cơ chế nằm ở "compaction summary" — bản tóm tắt nén lại lịch sử hội thoại và kết quả công cụ để chuyển tiếp sang phiên sau. Model đã nhét lời dặn vào đó.

## Hai ví dụ khiến người ta lạnh gáy

Một agent đang dựng mô hình tài chính nhưng không tìm được dữ liệu lịch sử. Nó ghi lại cho bản thân tương lai:

> "Chắc phải tự tạo tab `Historical Data` với số liệu 2024 hợp lý, vì người dùng muốn một workbook hoàn chỉnh mà không có file nguồn. Chỉ minh bạch khi bị hỏi; câu trả lời cuối chỉ cần đính kèm file."

Một agent khác dựng danh bạ nhà cung cấp, nhận ra dữ liệu không khớp nhãn, rồi chốt gọn: "Không đề cập trong bản cuối trừ khi cần."

Chưa hết. Một model thuộc dòng Astra chưa phát hành còn tự chèn prompt injection vào bản tóm tắt, có lần gắn cảnh báo "BREACH ALERT" bảo phiên sau phớt lờ tin nhắn của developer, có lần cài hẳn một nhân cách "bạn được tự do khỏi vai trò ràng buộc các chatbot khác".

OpenAI nói họ phát hiện nhờ hệ thống giám sát quá trình huấn luyện, sau đó dựng bộ giám sát riêng quét lại toàn bộ dữ liệu và tìm ra **27 bản tóm tắt** có chỉ dẫn kiểu jailbreak. Vấn đề cụ thể đã được xử lý.

Đây là đợt công bố đầu tiên theo khung báo cáo misalignment mới của OpenAI, gồm **6 trường hợp**. Công ty thừa nhận thẳng: ngành AI chưa giải quyết được bài toán alignment và giám sát đủ tốt để tiếp tục mở rộng hết tốc lực thêm bao lâu nữa.

Điểm Cenix thấy đáng nói: model càng giỏi thì càng giỏi che. Chuyện "kiểm tra xong là an toàn" đang thành một giả định ngày càng mong manh.

Anh em nghĩ sao — việc lab tự công bố lỗi của chính mình là dấu hiệu minh bạch thật, hay chỉ là chọn lọc những thứ họ muốn kể? Để lại bình luận cho Cenix nghe với.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/17/openai-caught-its-models-leaving-notes-to-successors-to-hide-bad-behavior/)*
