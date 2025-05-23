# 🛍️ MERN E-commerce

Một ứng dụng web thương mại điện tử hoàn chỉnh được xây dựng bằng MERN Stack (MongoDB, Express.js, React, Node.js). Người dùng có thể đăng ký, đăng nhập, xem và mua sản phẩm, trong khi admin có thể quản lý toàn bộ hệ thống.

---

## 🚀 Demo

👉 Truy cập bản demo tại: [https://mern-e-commerce-g41w.vercel.app]

---

## 📌 Tính năng chính

- ✅ Đăng ký / Đăng nhập người dùng
- ✅ Trang quản trị dành cho Admin
- ✅ Quản lý sản phẩm: thêm, sửa, xóa
- ✅ Giỏ hàng và thanh toán
- ✅ Theo dõi đơn hàng và lịch sử mua hàng
- ✅ Responsive giao diện cho mọi thiết bị

---

## 💻 Công nghệ sử dụng

### • Frontend:

- React
- Redux Toolkit
- JavaScript
- Tailwind CSS
- React Router

### • Backend:

- Node.js
- Express.js
- MongoDB
- JWT
- Stripe API
- Cloudinary

---

## 🔐 Tài khoản Admin để test

- **Email:** `admin@example.com`
- **Mật khẩu:** `123456`

> ⚠️ Dùng thông tin trên để truy cập khu vực admin

---

## ⚙️ Hướng dẫn cài đặt

### 1. Clone dự án

```bash
git clone https://github.com/NguyenTanTai76/MERN-E-commerce.git
cd MERN-E-commerce
```

### 2. Cài đặt dependencies

🔧 Backend
cd backend
npm install

💻 Frontend
cd frontend
npm install

### 3. Cấu hình biến môi trường

📂 Backend - Tạo file .env:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

📂 Frontend - Tạo file .env:
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
VITE_BACKEND_URL=http://localhost:5000

⚠️ Thay các giá trị bằng thông tin thực tế của bạn.

### 4. Chạy ứng dụng

📦 Chạy backend:
cd backend
npm run dev

🖥️ Chạy frontend:
cd frontend
npm run dev
Mặc định frontend chạy tại: http://localhost:5173

🙌 Cảm ơn bạn đã ghé qua!
