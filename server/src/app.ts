import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();

  const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());

  app.use(
    cors({
      origin: allowedOrigins.includes("*") ? true : allowedOrigins,
      methods: ["GET", "POST"],
    })
  );
  app.use(express.json({ limit: "32kb" }));

  app.use("/api", contactRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
