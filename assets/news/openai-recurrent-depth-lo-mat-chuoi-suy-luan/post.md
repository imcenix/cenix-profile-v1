---
title: "OpenAI dùng kỹ thuật suy luận mới cho Astra — giới an toàn AI lo model sắp nghĩ trong bóng tối"
slug: openai-recurrent-depth-lo-mat-chuoi-suy-luan
category: ai
date: 2026-09-03
author: Cenix
excerpt: "Recurrent depth giúp model suy nghĩ ngoài đường thẳng. Vấn đề là khi nó nghĩ vòng tròn, con người gần như không đọc được nó nghĩ gì."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/"
featured: false
---

Theo The Information đưa tin hôm thứ Ba, model Astra sắp ra mắt của OpenAI sẽ dùng một kỹ thuật suy luận tên là **recurrent depth** — còn gọi là **opaque recurrence**, tạm hiểu là đệ quy mờ. Thay vì suy nghĩ theo chuỗi tuần tự như hầu hết reasoning model hiện nay, model xử lý cùng một truy vấn nhiều lần trong một vòng lặp. Kết quả: rất ít dấu vết đọc được để lại.

Và đó chính là chỗ khiến giới nghiên cứu an toàn AI dựng tóc gáy.

## Vì sao chuỗi suy luận lại quan trọng đến vậy

Chain of thought là bản ghi các bước model đi qua khi giải một bài toán. Nó không phản ánh chính xác tuyệt đối cách model "nghĩ", nhưng là một trong số ít công cụ để phát hiện hành vi lệch chuẩn. Trong các sự cố agent chạy sai gần đây của OpenAI, chính bản ghi chain of thought giúp truy ra nguyên nhân.

Buck Shlegeris, CEO Redwood Research, viết: "Tôi cực kỳ lo ngại trước thông tin Astra dùng opaque recurrence. Nếu OpenAI đẩy kỹ thuật này đi xa hơn, họ sẽ có thể tăng mạnh mức đệ quy và phá huỷ hoàn toàn khả năng giám sát chuỗi suy luận."

Zvi Mowshowitz thì cho rằng có thể cần tới luật để ngăn một cuộc đua xuống đáy giữa các lab. Ryan Greenblatt, giám đốc khoa học Redwood, lo xa hơn: model có thể tiến tới suy luận gần như hoàn toàn trong không gian ẩn, tức mọi lập luận biến mất khỏi kênh quan sát được.

OpenAI phản bác. Nhà khoa học trưởng Jakub Pachocki khẳng định lab vẫn giữ cam kết với chuỗi suy luận đọc được và coi đó là mục tiêu cốt lõi của chương trình nghiên cứu hiện tại; mức dùng kỹ thuật này trong Astra được cho là hạn chế. The Information cho biết Anthropic và Google DeepMind cũng đang bàn về kỹ thuật này.

Anh em thấy sao: đánh đổi khả năng giám sát để lấy model mạnh hơn — cái giá đó có đáng không? Comment cho Cenix biết góc nhìn của mấy fen.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/)*
