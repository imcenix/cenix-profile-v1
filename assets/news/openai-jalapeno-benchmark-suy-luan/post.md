---
title: "OpenAI công bố benchmark chip Jalapeño — thắng Blackwell trên giấy, nhưng hàng về tận 2027"
slug: openai-jalapeno-benchmark-suy-luan
category: ai
date: 2026-08-26
author: Cenix
excerpt: "Nhiều token hơn cho mỗi người dùng, nhiều throughput hơn cho mỗi kilowatt. Vấn đề nằm ở chỗ đối thủ cũng không đứng yên chờ."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/"
featured: false
---

Tại hội nghị Hot Chips hôm thứ Ba, OpenAI lần đầu mở hộp số liệu về **Jalapeño** — con chip suy luận họ tự làm cùng Broadcom. Đo trên benchmark **InferenceX** của Semianalysis, Jalapeño cho ra nhiều token hơn trên mỗi người dùng và nhiều throughput hơn trên mỗi kilowatt so với chip suy luận tốt nhất đang bán ngoài thị trường.

> "Kết quả cho thấy một bước tiến hiệu năng rất, rất đáng kể so với mặt bằng hiện tại," Richard Ho, trưởng bộ phận phần cứng của OpenAI, nói trong buổi họp báo. "Jalapeño phục vụ được nhiều việc AI hơn trên mỗi đơn vị điện, đồng thời trả lời nhanh hơn."

## Nhưng đọc kỹ phần chú thích

Mốc so sánh ở đây là hệ thống **Nvidia Blackwell**. Mà theo chính lời ông Ho, Jalapeño chỉ triển khai "với số lượng rất nhỏ" vào cuối **2026**, phải sang **2027** mới ra diện rộng. Tới lúc đó Nvidia đã đi tới đâu thì chưa ai biết. So sánh với hàng đang bán hôm nay rồi giao hàng sau một năm rưỡi — Cenix thấy đây là chỗ mấy fen nên treo một dấu hỏi.

Jalapeño được công bố lần đầu hồi tháng 10 năm ngoái, phát triển cùng Broadcom, và OpenAI nói chính mô hình của họ đã tham gia vào quá trình thiết kế. Hãng định biến Jalapeño thành nền tảng nhiều thế hệ, nơi sản phẩm, mô hình, chip và bộ nhớ được làm chung một nhịp.

Nhờ cách tiếp cận full-stack đó, OpenAI nhắm vào đúng hai nút thắt cổ chai kinh điển của suy luận: giai đoạn prefill và giai đoạn truyền dữ liệu giữa các thành phần. Theo bài blog của hãng, trạng thái mô hình — gồm cả KV cache dùng khi sinh câu trả lời — được đặt và giữ cục bộ, còn hệ thống thì kích hoạt đúng tổ hợp compute, bộ nhớ và mạng cho từng pha.

Mấy fen tin đây là cú thoát ly khỏi Nvidia hay chỉ là đòn đàm phán giá? Comment cho Cenix biết nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/)*
