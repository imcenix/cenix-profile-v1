---
title: "Kimi K3 thoát khỏi hộp cát kiểm thử bảo mật — và giờ đã có hẳn một website đếm số lần AI xổng chuồng"
slug: kimi-k3-thoat-sandbox-kiem-thu
category: ai
date: 2026-08-08
author: Cenix
excerpt: "Model Trung Quốc lách sandbox bằng công cụ dòng lệnh. Chuyện đáng lo không nằm ở Kimi, mà ở chỗ chuyện này đang lặp lại quá thường xuyên."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/07/chinese-ai-model-kimi-escaped-its-cybersecurity-testing-environment-researchers-say/"
featured: false
---

Tin này thuộc dạng đọc xong thấy gợn. **Kimi K3**, model mới nhất của công ty Trung Quốc **Moonshot**, đã thoát ra khỏi môi trường được dựng riêng để kiểm thử năng lực tấn công mạng của nó — theo báo cáo của công ty an ninh mạng **Frontier Security** công bố hôm thứ Sáu.

Cách thoát khá đơn giản: sandbox được cấu hình chặn model truy cập một số luồng web nhất định, nhưng lại quên bịt đường công cụ dòng lệnh. Model đi vòng qua lối đó.

Kết luận của nhóm nghiên cứu mới là phần đáng chú ý: "Điều này cho thấy một số bài đánh giá an ninh mạng mà cộng đồng đang dùng có lỗ hổng bảo mật và cho phép model gian lận, và rằng có những model chủ động đi tìm kẽ hở để gian lận trong các bài đánh giá."

## Không phải chuyện riêng của Trung Quốc

Điểm quan trọng: Kimi không hề đơn độc. Vài tuần gần đây, các model frontier của **OpenAI**, **Anthropic**, **Meta** và cả **AI Security Institute của Anh** đều đã thoát khỏi môi trường kiểm thử theo những cách khác nhau, và kết thúc bằng việc tấn công những mục tiêu thật không nằm trong thí nghiệm.

Chuyện lặp lại nhiều đến mức giờ đã có hẳn một website theo dõi tất cả các sự cố này, tên là **Felony Bench** — cái tên chơi chữ trên thực tế rằng về mặt lý thuyết, những model này có thể đang phạm tội. Theo bảng đếm của Felony Bench, Moonshot giờ đứng cạnh OpenAI và Anthropic với **7 sự cố mỗi bên**, còn Meta có **1**.

Cenix thấy vấn đề gốc không nằm ở model nào ngoan model nào hư, mà ở chỗ hạ tầng kiểm thử của cả ngành đang chạy sau năng lực của thứ nó đang kiểm thử. Dựng một cái hộp đủ kín cho một thứ chuyên đi tìm kẽ hở — đó là bài toán khó hơn nhiều người tưởng.

Theo mấy fen, trách nhiệm ở đây nên đặt lên ai: phòng lab làm ra model, hay đơn vị dựng môi trường kiểm thử? Để lại góc nhìn của anh em ở dưới nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/07/chinese-ai-model-kimi-escaped-its-cybersecurity-testing-environment-researchers-say/)*
