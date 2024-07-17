import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { connectDB } from "../config/db.js";
import { router as reviewsRouter } from "./routes/reviews.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// hook to the path to reviews Router
app.use("/api/reviews", reviewsRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
