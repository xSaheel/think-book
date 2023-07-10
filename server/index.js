const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./utils/db");

const postRoutes = require("./routes/post.routes");
const authRoutes = require("./routes/auth.routes");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))