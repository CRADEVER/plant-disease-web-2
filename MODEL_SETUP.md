# Hướng dẫn Cài đặt Model

## Tình trạng hiện tại

⚠️ **Ứng dụng hiện đang ở CHẾ ĐỘ DEMO** vì chưa có model TensorFlow.js hợp lệ.

Chế độ demo cho phép bạn test giao diện và chức năng camera, nhưng kết quả dự đoán là ngẫu nhiên chỉ để mục đích demo.

## Bắt buộc: Cài đặt Model Thật

Để kích hoạt tính năng nhận diện bệnh cây thực tế, bạn cần cung cấp model TensorFlow.js đã được chuyển đổi đúng cách.

### Lựa chọn 1: Chuyển đổi Model Keras Hiện có

Nếu bạn có file model `.keras` hoặc `.h5` từ quá trình huấn luyện:

```bash
# Cài đặt công cụ chuyển đổi TensorFlow.js
pip install tensorflowjs

# Chuyển đổi model của bạn
tensorflowjs_converter \
  --input_format keras \
  /duong/dan/den/plant_model.keras \
  client/public/plant_model_js

# Điều này sẽ tạo ra:
# - model.json (kiến trúc model)
# - group1-shard*.bin (file trọng số)
```

### Lựa chọn 2: Sử dụng File Model Đã Chuyển đổi Sẵn

Nếu bạn đã chuyển đổi model (ví dụ: trên Google Colab), bạn sẽ có:

1. File `model.json` chứa kiến trúc model
2. Một hoặc nhiều file `.bin` chứa trọng số

Copy các file này vào: `client/public/plant_model_js/`

### Yêu cầu Model

Model của bạn phải:
- Chấp nhận ảnh RGB 224x224 làm input
- Output 12 dự đoán lớp (softmax)
- Ở định dạng TensorFlow.js Layers Model
- Khớp với thứ tự lớp trong `shared/schema.ts`:

```typescript
const CLASS_NAMES = [
  "Apple___Apple_scab",
  "Apple___Black_rot",
  "Apple___Cedar_apple_rust",
  "Apple___healthy",
  "Blueberry___healthy",
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
  "Corn_(maize)___Common_rust_",
  "Corn_(maize)___Northern_Leaf_Blight",
  "Corn_(maize)___healthy",
  "Grape___Black_rot",
  "Grape___Esca_(Black_Measles)",
  "Grape___healthy",
];
```

## Khắc phục sự cố

### Model không tải được

**Lỗi:** "Cannot read property 'layers' of undefined"
- **Giải pháp:** File model.json của bạn không đầy đủ hoặc sai định dạng. Chuyển đổi lại từ nguồn.

**Lỗi:** "Failed to fetch"
- **Giải pháp:** Đảm bảo file model ở trong `client/public/plant_model_js/`
- Kiểm tra tab Network trong DevTools trình duyệt cho lỗi 404

**Lỗi:** "Input shape mismatch"
- **Giải pháp:** Xác minh model của bạn mong đợi input shape 224x224x3

### File trọng số

File trọng số binary (`.bin`) phải khớp với đường dẫn được chỉ định trong `model.json`:

```json
{
  "weightsManifest": [
    {
      "paths": ["group1-shard1of3.bin", "group1-shard2of3.bin", "..."],
      "weights": [...]
    }
  ]
}
```

Nếu output converter của bạn sử dụng tên file khác, thì:
1. Đổi tên file để khớp, hoặc
2. Cập nhật đường dẫn trong `model.json`

## Xác minh cài đặt của bạn

Sau khi thêm file model:

1. Khởi động lại server phát triển: `npm run dev`
2. Mở Console trong DevTools trình duyệt
3. Tìm: `"✅ Model đã tải xong"`
4. Nếu thấy lỗi, kiểm tra phần khắc phục sự cố

## Huấn luyện Model của riêng bạn

Nếu bạn chưa có model, bạn có thể:

1. Sử dụng Jupyter notebook được cung cấp (`attached_assets/plant_model_tfjs_*.ipynb`)
2. Huấn luyện trên PlantVillage dataset
3. Chuyển đổi sang định dạng TensorFlow.js (xem Lựa chọn 1 ở trên)

## Cần trợ giúp?

- Kiểm tra `client/public/plant_model_js/README.md`
- Xem lại console trình duyệt cho thông báo lỗi
- Đảm bảo bạn đang sử dụng định dạng model tương thích với TensorFlow.js
- Mở issue trên GitHub với chi tiết lỗi

## Chế độ Demo

Trong khi ở chế độ demo (không có model hợp lệ):
- Camera chụp hoạt động bình thường
- Dự đoán là ngẫu nhiên
- UI/UX có thể được test đầy đủ
- Hoàn hảo cho phát triển mà không cần model đã huấn luyện

**Để thoát chế độ demo:** Cung cấp model.json hợp lệ và khởi động lại ứng dụng.
