import express from "express";
import cors from "cors";
import { config } from "dotenv";
import emailRoutes from "./src/routes/email/emailRoutes.js";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import agenda from "./src/config/agenda.js"; // Import agenda instance

config();
const app = express();
const PORT = process.env.PORT || 8000;

export const SECRETKEY = process.env.JWT_SECRET;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*", methods: "GET,POST" }));

// Connect Database
connectDB();

// Start Agenda
agenda
  .start()
  .then(() => {
    console.log("Agenda started successfully");
  })
  .catch((error) => {
    console.error("Error starting Agenda:", error.message);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/emails", emailRoutes);

// Test Route
app.get("/test", (req, res) => res.json({ message: "API is working" }));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
