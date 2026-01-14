require('dotenv').config()

import express from "express";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user"
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173", }));
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

app.get("/", (_req, res) => {
    res.send("Backend is running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

