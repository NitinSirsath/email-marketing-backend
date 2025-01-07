import express from "express";
import { login, register } from "../controllers/authController.js";

const authRoutes = express.Router();

// Register route
authRoutes.post("/register", register);

// Login route
authRoutes.post("/login", login);

export default authRoutes;
