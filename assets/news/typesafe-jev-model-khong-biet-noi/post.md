---
title: "Cha đẻ RLHF ra model AI không biết nói — và dân dev đang phát cuồng vì nó"
slug: typesafe-jev-model-khong-biet-noi
category: ai
date: 2026-09-19
author: Cenix
excerpt: "Jev không nhả ra chữ, nó nhả ra xác suất. Không biết nói nên cũng không biết bịa — và rẻ tới mức token đầu ra được cho không."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/"
featured: true
---

Diogo Almeida từng là nghiên cứu viên OpenAI, góp công dựng ChatGPT và đồng phát minh **RLHF** — kỹ thuật huấn luyện có lẽ chịu trách nhiệm lớn nhất cho kỷ nguyên AI hiện tại. Rồi anh thất vọng với chính thứ mình làm ra.

> "Chúng ta có sấm sét trong chai, vậy mà nó không hữu dụng", Almeida nói với TechCrunch. "Vấn đề là chúng ta đang tối ưu cho ngôn ngữ con người... Bốn năm qua ta giỏi ngôn ngữ con người kinh khủng, nhưng thứ đó vô dụng với tự động hóa, vì máy tính nói một thứ tiếng khác."

Hai năm trước anh rời OpenAI lập **TypeSafe AI**. Tuần này công ty tung ra **Jev** — vẫn dựa trên kiến trúc transformer, nhưng không phải LLM. Nó không xuất ra chữ. Nó xuất ra xác suất, thứ công ty gọi là "quyết định đã hiệu chuẩn".

## Bỏ ngôn ngữ đi thì được gì

Được ba thứ. Model nhanh kinh khủng, rẻ kinh khủng, và **không thể bịa** — vì người dùng định nghĩa sẵn các đầu ra có thể có. Token đầu ra miễn phí, token đầu vào tính theo **tỷ** chứ không phải theo triệu.

Dân dev lao vào đông tới mức API của TypeSafe có lúc sập, không phục vụ nổi. Pranit Sharma, kỹ sư ở Vercel, thay model Luna 5.6 của OpenAI bằng Jev cho tác vụ phân loại lệnh an toàn: kết quả về nhanh hơn **5 đến 18 lần** và chính xác hơn. Nikhil Mudholkar, CTO Bryo AI, thử phân loại email doanh nghiệp: Gemini chính xác hơn một chút nhưng đắt hơn **10 đến 20 lần**.

Điều Mudholkar khoái nhất lại là điểm tự tin: "nó là thứ duy nhất trả về một xác suất thật, quá hợp để tự động hóa quy trình."

Tên Jev đặt theo William Stanley Jevons — nhà kinh tế thế kỷ 19 với nghịch lý mang tên ông: giá một thứ càng rẻ, người ta càng xài nhiều. Almeida cược rằng trí tuệ cũng vậy. Model được huấn luyện hoàn toàn bằng dữ liệu tổng hợp, bằng kỹ thuật anh gọi là "học tăng cường từ quyết định đã hiệu chuẩn".

Cenix thấy đây là tin đáng chú ý nhất tuần: cả ngành đang đua nhau làm model biết nói hay hơn, còn có người đi ngược — làm model không nói gì cả.

Anh em nghĩ sao, model "không biết nói" kiểu này sẽ ăn mất bao nhiêu phần việc mà giờ mình đang trả tiền cho LLM? Kể Cenix nghe ở phần bình luận nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)*
