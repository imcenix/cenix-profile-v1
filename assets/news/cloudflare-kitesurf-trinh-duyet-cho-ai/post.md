---
title: "Cloudflare ra Kitesurf, trình duyệt không dành cho con người — 12 tuần dựng xong một thứ Chrome không làm được"
slug: cloudflare-kitesurf-trinh-duyet-cho-ai
category: cong-nghe
date: 2026-08-08
author: Cenix
excerpt: "Không tab, không theme, không extension. Kitesurf bỏ hết những thứ trình duyệt sinh ra để phục vụ mắt người — vì người dùng của nó là AI agent."
cover: cover.webp
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/"
featured: false
---

Cloudflare vừa nhảy vào cuộc đua trình duyệt, nhưng không phải để giành thị phần với Chrome. Hãng hạ tầng internet này ra mắt **Kitesurf** — trình duyệt chạy trên cloud, thiết kế riêng cho **AI agent** thay vì cho con người.

Logic đằng sau khá thuyết phục. Phần mềm AI đang chuyển từ chatbot trả lời câu hỏi sang agent thực thi tác vụ thay người dùng, mà muốn thực thi thì phải điều hướng web và dùng website như người. Nhưng một trình duyệt phục vụ agent thì không quan tâm tới theme, tab hay extension. Thứ nó cần là quản lý context window, hiệu năng, chi phí token và khả năng mở rộng. Nó cũng đối mặt mô hình đe dọa hoàn toàn khác — điển hình là **prompt injection**.

## Dựng trong 12 tuần, trên nền Workers

Cloudflare nói họ quyết định làm Kitesurf chỉ **12 tuần trước**, và toàn bộ chạy trên nền tảng serverless **Workers** của hãng. Sản phẩm đang miễn phí trong giai đoạn beta qua **Browser Run**.

Về mặt kỹ thuật, Kitesurf ghép từ nhiều mảnh mã nguồn mở: engine render module hoá từ **Blitz**, bộ phân tích CSS **Stylo** của Firefox, và engine ECMAScript viết bằng Rust là **Boa JS**. Dù còn mới, hãng nói nó đã vượt khoảng **215.000 bài web platform test** và đang bổ sung thêm hàng trăm bài mỗi tuần. Nó render đúng Wikipedia, Hacker News, TodoMVC và phần lớn dashboard của chính Cloudflare.

Điểm bán hàng chính là chi phí: "Kitesurf hiệu quả hơn đáng kể so với Chromium về tiêu thụ CPU và bộ nhớ cho các tác vụ agent phổ biến như chụp màn hình và trích xuất HTML."

Cenix thấy đây là một tín hiệu thú vị về hướng đi của web. Suốt ba mươi năm, trình duyệt được tối ưu cho mắt người — pixel, animation, layout đẹp. Giờ xuất hiện một nhánh song song tối ưu cho thứ chỉ cần DOM và text. Nếu nhánh này lớn lên, câu hỏi "thiết kế web cho ai" sẽ phải trả lời lại từ đầu.

Anh em làm sản phẩm nghĩ sao — website của mình có nên bắt đầu tính tới việc phục vụ cả agent lẫn người dùng chưa? Bàn với Cenix ở dưới nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/)*
