---
title: "Google mở nguồn TorchTPU — một ngày sau Amazon, cả hai cùng nhắm vào lợi thế phần mềm của Nvidia"
slug: google-torchtpu-mo-nguon-ganh-nvidia
category: cong-nghe
date: 2026-10-21
author: Cenix
excerpt: "Chuyển app PyTorch sang chip TPU chỉ bằng thay đổi cấu hình. Cuộc chiến với Nvidia giờ diễn ra ở tầng developer, không còn chỉ ở tầng phần cứng."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/"
featured: false
---

Google vừa mở nguồn **TorchTPU**, bản PyTorch chạy trên chip Tensor Processing Unit (TPU) của hãng. Ý đồ rõ như ban ngày: phần lớn app AI mặc định được viết để chạy trên GPU Nvidia, và Google muốn cho developer một đường chuyển sang chip và cloud của mình dễ dàng. PyTorch (do Meta tạo ra năm 2016, trao cho Linux Foundation năm 2022) được cho là có mặt trong khoảng **85%** app AI.

## Chuyển đổi gần như không phải viết lại

Theo Google, developer chỉ cần "một thay đổi cấu hình đơn giản", không phải viết lại ứng dụng. Hãng nói đã làm việc trực tiếp với Meta, Hugging Face, Inferact (vLLM), RadixArk (SGLang) và nhiều bên khác để các thư viện chạy mượt. Kèm theo là **TPU agent suite**, công cụ hỗ trợ chuyển app và sửa lỗi trên đường đi, cùng bản cập nhật LiteRT cho AI chạy trên điện thoại, laptop và thiết bị nhúng.

Hôm thứ Hai, Amazon đã ra mắt **TorchNeuron** cho chip Trainium theo hướng tương tự, đồng thời gửi code vào dự án PyTorch chính để tách bớt các tính năng khỏi chip Nvidia. TechCrunch nhận xét Google có thể "nhỉnh hơn" Amazon ở vài điểm.

Tuy vậy bài báo cũng giữ sự tỉnh táo: không có nghĩa developer sẽ rời bỏ phần cứng Nvidia hàng loạt chỉ vì giờ chuyển chip dễ hơn. Nhưng Amazon và Google rõ ràng đang cùng làm một việc: xóa dần lợi thế của Nvidia.

Anh em nghĩ lợi thế phần mềm của Nvidia còn giữ được bao lâu? Để lại ý kiến cho Cenix nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/)*
