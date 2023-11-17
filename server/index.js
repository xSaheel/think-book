const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./utils/db");

const postRoutes = require("./routes/post.routes");
const authRoutes = require("./routes/auth.routes");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const corsOptions = { 
    origin: [process.env.PROD_BASE_URL, process.env.DEV_BASE_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
};

app.use(express.json({ limit: '50mb'}));
app.use(cors(corsOptions));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/auth", authRoutes);

//testing
app.use("/", (req, res) => res.send("Think-book Servers"))

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))