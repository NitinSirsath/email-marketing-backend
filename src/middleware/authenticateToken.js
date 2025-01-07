import jwt from "jsonwebtoken";
import { SECRETKEY } from "../index.js";

let tokenBlacklist = []; // Maintain a blacklist of invalidated tokens

const invalidateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  // Add the token to the blacklist
  tokenBlacklist.push(token);
  res.status(200).json({ success: true, message: "Logout successful" });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized: Token missing" });
  }

  jwt.verify(token, SECRETKEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, error: "Unauthorized: Invalid token" });
    }
    req.user = user;
    next();
  });
};

export { authenticateToken, invalidateToken };
