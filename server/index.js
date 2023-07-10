const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./utils/db");
const postRoutes = require("./routes/post.routes");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express().use(express.json());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))