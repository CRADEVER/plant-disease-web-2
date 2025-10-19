# Đóng góp cho Ứng dụng Nhận diện Bệnh Cây

Cảm ơn bạn đã quan tâm đến việc đóng góp! Tài liệu này cung cấp hướng dẫn để đóng góp cho dự án này.

## Cách đóng góp

### Báo cáo lỗi

Nếu bạn tìm thấy lỗi, vui lòng mở issue với:
- Mô tả rõ ràng về vấn đề
- Các bước để tái hiện
- Hành vi mong đợi vs hành vi thực tế
- Screenshots nếu có thể
- Thông tin trình duyệt/thiết bị

### Đề xuất tính năng

Đề xuất tính năng luôn được hoan nghênh! Vui lòng bao gồm:
- Mô tả use case
- Làm thế nào nó sẽ có lợi cho người dùng
- Bất kỳ ý tưởng triển khai nào (tùy chọn)

### Pull Requests

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/ten-tinh-nang-cua-ban`
3. Thực hiện thay đổi của bạn
4. Test kỹ lưỡng
5. Commit với message rõ ràng: `git commit -m "Thêm tính năng: mô tả"`
6. Push lên fork của bạn: `git push origin feature/ten-tinh-nang-cua-ban`
7. Mở Pull Request

## Thiết lập phát triển

```bash
# Clone fork của bạn
git clone https://github.com/TEN_NGUOI_DUNG_CUA_BAN/plant-disease-detection.git

# Cài đặt dependencies
npm install

# Khởi động server phát triển
npm run dev
```

## Code Style

- Sử dụng TypeScript cho type safety
- Tuân theo định dạng code hiện có
- Sử dụng tên biến có ý nghĩa
- Thêm comment cho logic phức tạp
- Giữ function nhỏ và tập trung

## Testing

Trước khi submit PR:
- Test trên nhiều trình duyệt (Chrome, Firefox, Safari)
- Test trên thiết bị di động
- Xác minh truy cập camera hoạt động
- Kiểm tra tải model và dự đoán
- Test toggle chế độ tối
- Xác minh responsive design

## Đóng góp Model

Nếu bạn muốn cải thiện AI model:
- Tài liệu hóa quá trình huấn luyện
- Chia sẻ thông tin dataset
- Cung cấp hướng dẫn chuyển đổi
- Bao gồm số liệu hiệu năng

## Câu hỏi?

Vui lòng mở issue cho câu hỏi hoặc làm rõ!
