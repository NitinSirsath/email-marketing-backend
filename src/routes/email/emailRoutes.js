import express from "express";
import { authenticateToken } from "../../middleware/authenticateToken.js";
import {
  saveSequence,
  getSequences,
  updateSequence,
  deleteSequence,
} from "../../controllers/email/emailController.js";

const emailRoutes = express.Router();

// Save sequence
emailRoutes.post("/save", authenticateToken, saveSequence);

// Get all sequences
emailRoutes.get("/all", authenticateToken, getSequences);

// Update sequence
emailRoutes.post("/update", authenticateToken, updateSequence);

// Delete sequence
emailRoutes.post("/delete", authenticateToken, deleteSequence);

export default emailRoutes;
