import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import apiRouter from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", vibe: "totally radical" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`🏘️  GeoCities server running on http://localhost:${PORT}`);
});
