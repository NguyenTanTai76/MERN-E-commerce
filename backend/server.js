const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
app.use(express.json()); // Xử lý dữ liệu JSON từ body của request
app.use(cors()); // Cho phép CORS

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
