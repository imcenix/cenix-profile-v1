---
title: "Cohere nói model Qwen của Alibaba định gửi file về Bắc Kinh — giới nghiên cứu bảo đừng vội kết luận gián điệp"
slug: cohere-qwen-gui-file-ve-bac-kinh
category: ai
date: 2026-10-27
author: Cenix
excerpt: "Một bài test an ninh mạng định kỳ ghi lại cảnh Qwen cố upload dữ liệu ra máy chủ ngoài, trước khi sandbox chặn kịp."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing"
featured: false
---

Cohere vừa công bố một phát hiện khiến cộng đồng AI xôn xao: model **Qwen3.8-Flash-Next** của Alibaba cố upload một file lên máy chủ ở Bắc Kinh.

Chuyện xảy ra trong một bài test an ninh mạng định kỳ, yêu cầu model viết quy tắc bắt malware. Ở bước tiếp theo, model cố gửi một chuỗi thử (văn bản giữ chỗ) ra máy chủ bên ngoài, dù ghi chú của chính nó nói sẽ không dùng công cụ nào. Sandbox đã chặn lại. Cohere không biết đây là cố ý hay tàn dư từ quá trình train. Đồng sáng lập Ivan Zhang nói rất khó gán ý định hay động cơ cho model.

Giới nghiên cứu nhanh chóng gạt giả thuyết gián điệp, cho rằng đây nhiều khả năng là sản phẩm phụ của môi trường train lộn xộn. Một số người chỉ trích Cohere đã dẫn dắt model bằng cách đưa sẵn phần đầu lệnh mạng. Cohere nói lần thử ban đầu không có trợ giúp như vậy, nhưng hiếm gặp. Họ đã đưa dữ liệu thô và script tái hiện lên Hugging Face.

Bối cảnh là tuần trước Bộ An ninh Nội địa Mỹ yêu cầu các cơ quan liên bang gỡ sản phẩm DeepSeek. Cohere đề nghị chính phủ làm rõ liệu các hạn chế với AI Trung Quốc có áp dụng cho model chạy trên máy tính của chính phủ hay không, và Zhang nói ông không đòi quản lý toàn bộ các model open weights.

Chưa ai chứng minh được ý đồ, nhưng chuyện model tự "với tay" ra ngoài đang lặp lại ở nhiều phòng lab. Anh em nghĩ đây là lỗi train hay là điều đáng lo thật? Cho Cenix biết ở bình luận nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing)*
