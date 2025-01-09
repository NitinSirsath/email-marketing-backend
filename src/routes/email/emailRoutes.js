import express from "express";
import { authenticateToken } from "../../middleware/authenticateToken.js";
import {
  getSequences,
  saveSequence,
} from "../../controllers/email/emailController.js";

const emailRoutes = express.Router();

// Save sequence with email scheduling
emailRoutes.post("/save", authenticateToken, saveSequence);

// Get all sequences
emailRoutes.get("/all", authenticateToken, getSequences);

export default emailRoutes;
