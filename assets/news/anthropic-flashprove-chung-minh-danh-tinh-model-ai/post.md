---
title: "Anthropic làm FlashProve — để chứng minh output AI thật sự đến từ đúng model"
slug: anthropic-flashprove-chung-minh-danh-tinh-model-ai
category: ai
date: 2026-11-05
author: Cenix
excerpt: "Hệ thống mã nguồn mở dùng chứng minh mật mã, nhằm chặn chuyện nhà cung cấp lén thay model rẻ hơn vào chỗ model đã hứa. Mới ở giai đoạn nghiên cứu."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/"
featured: false
---

Theo một bài blog đăng hôm thứ Ba, Anthropic đang phát triển **FlashProve**, hệ thống mã nguồn mở để xác minh một output AI do model nào tạo ra. Ý tưởng là "provable inference": một bằng chứng mật mã cho thấy kết quả đến từ đúng model, giống chữ ký số trong email.

## Giải quyết nỗi ngờ gì

Các nhà nghiên cứu nói hệ thống phải chống được kẻ mạo danh, kể cả khi đó chính là phòng lab tạo ra model. Nó có thể ngăn một công ty âm thầm thay model rẻ hơn để cắt chi phí, hoặc thay model đắt hơn để thổi phồng kết quả đánh giá. Nó cũng giúp kiểm chứng các tuyên bố của bên thứ ba: "How can a user verify these claims?"

Cách hoạt động: các lab công bố một "fingerprint" cho mỗi model phát hành. Fingerprint không lộ trọng số, nên cả model thương mại cũng tham gia được. Thiết kế đủ nhẹ để việc xác minh chạy được ngay trên thiết bị cục bộ. Đặc tả kỹ thuật (PDF) và mã nguồn đã có trên GitHub (anthropics/FlashProve).

Cần lưu ý: đây vẫn là nghiên cứu, hiện chưa có kế hoạch triển khai ở Anthropic hay lab nào khác. Bài blog tự nhận chỉ "meant to share intermediate progress, and not a completed research agenda".

Anh em có từng nghi ngờ model mình đang gọi API có đúng như quảng cáo không? Kể Cenix nghe dưới bình luận.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/)*
