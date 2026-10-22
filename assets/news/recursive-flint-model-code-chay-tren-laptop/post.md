---
title: "Recursive ra Flint, model code chạy ngay trên laptop — và phần lớn do chính AI xây ra"
slug: recursive-flint-model-code-chay-tren-laptop
category: ai
date: 2026-10-22
author: Cenix
excerpt: "Startup của cựu chief scientist Salesforce tung model mã nguồn mở 40 tỷ tham số, nhanh gấp đôi các model cùng tầm trên MacBook."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/"
featured: false
---

Một model code miễn phí chạy ngay trên laptop, nghe là muốn thử liền.

Recursive, startup lập năm ngoái, vừa phát hành model đầu tiên là **Flint**. Đây là model mixture-of-experts **40 tỷ tham số**, mỗi lần chỉ kích hoạt **2,5 tỷ**, phát hành miễn phí trên Hugging Face theo giấy phép Apache 2.0. Điều đặc biệt là hệ thống nghiên cứu tự động "Eureka Machine" của họ tham gia gần như mọi bước, và một nhóm nhỏ dựng model từ đầu trong chưa đầy bốn tháng.

## Tốc độ và hiệu năng

Theo thử nghiệm của chính Recursive, trên MacBook Pro chip M4 Pro, Flint đạt khoảng **131 token/giây**, so với **58 đến 69** của các model tương đương như Gemma 4 và Nemotron 3.5 Lightning. Trên Nvidia RTX Spark vượt **150 token/giây**. Ở SWE-Bench Verified, Flint hơn các model dưới 50 tỷ tham số; trên điểm trung bình sáu bài test của hãng, chỉ Qwen3.8 27B của Alibaba cao hơn.

Eureka đóng góp một kiến trúc thưa hơn, huấn luyện low-bit giúp model **nhỏ đi 71%** gần như không giảm chất lượng, và các kernel tùy chỉnh. Recursive thừa nhận Flint cần được hướng dẫn nhiều hơn các trợ lý code trả phí.

Công ty ra khỏi chế độ ẩn danh hồi tháng 5 với **650 triệu USD** ở mức định giá **4,65 tỷ USD**; CEO là Richard Socher, cựu chief scientist Salesforce. Mục tiêu dài hạn của ông là tự cải thiện đệ quy, có con người giám sát.

Số liệu trên là do hãng tự đo, nên anh em nhớ tự thử. Ai đã chạy model code local rồi, thấy thế nào? Comment nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/)*
