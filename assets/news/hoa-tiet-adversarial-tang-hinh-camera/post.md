---
title: "Hoạ tiết khiến camera giám sát không thấy bạn — sau 31 triệu lần thử"
slug: hoa-tiet-adversarial-tang-hinh-camera
category: thiet-ke
date: 2026-08-10
author: Cenix
excerpt: "Một nhà nghiên cứu bảo mật dạy mô hình AI cách 'vẽ' cho tới khi tìm ra hoạ tiết đánh lừa được 11 thuật toán nhận diện. Phần hay nhất lại nằm ở bài toán thiết kế."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/09/this-adversarial-pattern-can-prevent-surveillance-cameras-from-detecting-you/"
featured: false
---

Bill Swearingen dành trọn một năm chạy đi chạy lại gần như cùng một phép thử. Sau khoảng **31 triệu lần**, anh nói mình đã tạo được những hoạ tiết mà khi in lên quần áo hay dán lên vật thể, sẽ khiến nhiều loại camera giám sát và máy đọc biển số phổ biến nhất không nhận ra thứ bị che.

Điểm tinh tế: hoạ tiết **không** chặn camera quay hình. Nó chỉ làm rối khả năng nhận dạng — camera vẫn ghi, nhưng không kích hoạt cảnh báo phát hiện người, khuôn mặt hay xe. Nói theo cách của bài báo, người ta trở lại thành cây kim trong đống cỏ khô, trừ khi có ai đó biết chính xác chỗ phải tìm.

## Dạy mô hình cách "vẽ"

Cách làm mới là phần Cenix thích. Swearingen bắt đầu từ một phòng lab thử nghiệm, lần lượt phá từng thuật toán nhận diện mã nguồn mở. Dần dần nó tiến hoá thành một mô hình reinforcement learning tự huấn luyện — nói đơn giản là anh dạy mô hình "cách vẽ".

Mỗi lần một hoạ tiết thất bại và bị thuật toán phát hiện, mô hình lại thử tiếp. Cứ thế cho tới khi tìm ra công thức đánh bại cùng lúc toàn bộ **11 thuật toán** mã nguồn mở anh đem ra thử, bao gồm phần mềm chạy máy đọc biển số Flock, camera gắn người Axon và camera dùng Clearview AI. Hiện mô hình đẻ ra hoạ tiết mới mỗi phút, lô sau tốt hơn lô trước về mặt toán học.

Thứ Sáu vừa rồi tại hội nghị Def Con ở Las Vegas, anh chạy thử ngoài đời thật: phủ hoạ tiết lên một chiếc **Toyota Yaris đời 2009** để xem camera Flock có thấy không. "Chúng tôi đã chứng minh nó hiệu quả", anh nói — dù mấy cái bánh xe vẫn là bài toán khó.

Dự án tên **noRecognition**, và tham vọng của nó rất dân thiết kế: hoạ tiết phải đủ chất lượng và độ phân giải để hoạt động từ khoảng cách xa, mà nhìn vẫn phải đẹp, mặc được. "Quyền riêng tư là một quyền cơ bản", Swearingen nói, và mô tả hoạ tiết của mình như một cách để người ta "chọn không bị theo dõi".

Mấy fen nghĩ sao — nếu có áo hoodie in hoạ tiết kiểu này, anh em mặc vì tính năng, vì tuyên ngôn, hay đơn giản vì nó nhìn ngầu? Comment cho Cenix biết.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/09/this-adversarial-pattern-can-prevent-surveillance-cameras-from-detecting-you/)*
