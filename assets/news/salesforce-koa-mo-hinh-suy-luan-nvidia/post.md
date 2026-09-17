---
title: "Salesforce bắt tay Nvidia ra model suy luận riêng — cơn ác mộng lịch sự dành cho các AI lab"
slug: salesforce-koa-mo-hinh-suy-luan-nvidia
category: ai
date: 2026-09-17
author: Cenix
excerpt: "Koa được post-train trên nền Nemotron open-weight của Nvidia, không nuốt một byte dữ liệu khách hàng nào, và đốt ít token hơn. Nghĩa là Salesforce bớt phải gọi sang Claude hay ChatGPT."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/"
featured: true
---

Tại Dreamforce tuần này, Salesforce công bố **Koa** — model suy luận (reasoning model) đầu tiên của hãng, dựng trên nền **Nemotron** open-weight của Nvidia. Hai bên cùng post-train nó để giỏi mấy việc rất cụ thể: bán hàng, marketing, chăm sóc khách hàng.

Nghe thì bình thường, nhưng đây mới là chỗ đáng chú ý: trước Koa, mỗi khi một agent trong Agentforce cần suy luận qua tác vụ nhiều bước, prompt sẽ được đẩy sang model frontier — Claude hoặc ChatGPT. Giờ thì không nhất thiết nữa.

## Vì sao doanh nghiệp lại tự làm model

Jayesh Govindarajan, EVP mảng AI của Salesforce, nói lý do trước giờ chưa làm là thiếu một base model đủ chuẩn để bắt đầu:

> "Cho tới khi Nemotron xuất hiện, không có một model pre-trained sovereign của Mỹ nào vừa sẵn có, vừa state of the art, vừa rõ ràng về nguồn gốc dữ liệu. Chúng tôi chẳng biết Qwen train trên cái gì."

Điểm bán hàng của Koa là một danh sách rất "doanh nghiệp": mở trọng số nên không bị khoá vào một lab, train cho việc thật chứ không phải để giải bài toán bất khả, không nuốt dữ liệu khách hàng nên không thể rò rỉ, và đốt ít token hơn cho cùng khối lượng việc — tức là hoá đơn AI nhẹ đi.

Điều thú vị là Salesforce và Nvidia không dùng một dòng dữ liệu thật nào của khách. Họ dựng dữ liệu tổng hợp, mô phỏng cả một trung tâm chăm sóc khách hàng — có persona nhân viên, có luôn khách hàng đang cáu — rồi cho model học trong đó.

Nhưng đừng vội nghĩ Salesforce quay lưng với các lab. Hãng vừa công bố **Claudeforce**, hợp tác với Anthropic để doanh nghiệp dùng Claude làm giao diện AI trong khi dữ liệu vẫn nằm trong hệ thống của Salesforce.

Tui nghĩ đây là tín hiệu rõ: nhu cầu AI của doanh nghiệp đang tách dần khỏi thứ các lab frontier muốn bán. Mấy fen thấy sao — model chuyên việc rẻ token sẽ thắng, hay model to nhất vẫn là vua? Kể Cenix nghe ở phần bình luận.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/)*
