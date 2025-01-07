import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routes/user/userRoute.js";
import { authenticateToken } from "./middleware/authenticateToken.js";
import microsoftRoute from "./routes/microsoft/microsoftRoute.js";
config();

export const SECRETKEY = process.env.JWT_SECRET_KEY;

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    method: "GET,POST",
    alllowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 200,
  })
);

app.listen(PORT, () => {
  console.log("success on", PORT);
});

app.use("/api/user", userRouter);
app.use("/api/report", authenticateToken, microsoftRoute);

app.get("/test", (req, res) => {
  return res.json({ message: "success on" });
});

export default app;
