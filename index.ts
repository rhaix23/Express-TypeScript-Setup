import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import env from "dotenv";
import { corsOptions } from "./configurations/corsOptions.js";
env.config();

// Create express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT || 3000, () => {
  process.env.NODE_ENV === "development" &&
    console.log("Server is running on port 3000");
});
