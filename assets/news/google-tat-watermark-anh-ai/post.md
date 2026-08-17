---
title: "Google cho tắt watermark ảnh AI — nhưng dấu vết vô hình vẫn ở đó"
slug: google-tat-watermark-anh-ai
category: ai
date: 2026-08-16
author: Cenix
excerpt: "Cái logo chình ình góc ảnh Gemini sắp biến mất theo ý anh em. Chỉ là biến mất khỏi mắt thường thôi."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/14/google-will-now-allow-users-to-remove-visible-watermark-from-its-ai-generations/"
featured: false
---

Tin vui cho anh em làm thiết kế: Google vừa thông báo sẽ cho phép tắt watermark hiển thị trên nội dung do AI của họ tạo ra — bao gồm cả ảnh, video lẫn nhạc.

Josh Woodward, VP mảng Gemini, cho biết toggle này áp dụng cho các model **Nano Banana, Omni và Lyria**. Tuỳ chọn sẽ nằm trong Gemini và trình dựng video Flow, còn bên Search thì sắp có. Đường đi: Settings > Media Watermark, bật tắt tuỳ ý. Tính năng đang rollout trong vài ngày tới.

## Tắt cái nhìn thấy, giữ cái không nhìn thấy

Đây mới là phần quan trọng. Tắt watermark hiển thị **không** ảnh hưởng tới SynthID — lớp watermark vô hình nhúng thẳng vào file — và cũng không đụng tới metadata theo chuẩn C2PA. Woodward nói thẳng:

> "Chúng tôi đang cân bằng giữa quyền kiểm soát sáng tạo và an toàn: watermark hiển thị giờ là tuỳ chọn, nhưng SynthID vô hình và metadata C2PA vẫn được dùng để đảm bảo minh bạch. Anh em vẫn có thể dùng Gemini hoặc Search để kiểm tra một tấm ảnh có phải do AI tạo ra hay không."

Google còn open source một thư viện mới tên **Credentio**, để lập trình viên nhúng cơ chế xác thực C2PA ngay trong app của mình.

Với dân thiết kế thì đây là thay đổi thực dụng. Cái logo góc ảnh làm asset gần như không xài được cho việc chuyên nghiệp — phải crop, phải retouch, phiền. Nhưng cần hiểu đúng: tắt watermark không có nghĩa là "sạch dấu vết". File vẫn khai báo nguồn gốc của nó, chỉ là khai báo với máy chứ không khai báo với mắt người.

Động thái này đến ngay sau vụ Anthropic gắn watermark vào văn bản do Claude tạo ra để tuân thủ quy định EU — một bên đang siết, một bên đang nới. Chà, quyết định khó thiệt: minh bạch tới đâu là đủ, mà không làm phiền người dùng?

Anh em đứng phe nào — watermark hiển thị nên mặc định bật hay mặc định tắt? Comment cho tui biết nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/14/google-will-now-allow-users-to-remove-visible-watermark-from-its-ai-generations/)*
