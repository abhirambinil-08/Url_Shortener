import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.Route.js";
import urlRoutes from "./src/routes/url.Route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", urlRoutes);

export default app;
