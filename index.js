import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";

config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 200,
  })
);

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://nitinsirsath8855:ZoqdUbsGGrD3Ps72@cluster0.bosvm.mongodb.net/mydatabase"
  )
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/test", (req, res) => {
  return res.json({ message: "success on" });
});

export default app;
