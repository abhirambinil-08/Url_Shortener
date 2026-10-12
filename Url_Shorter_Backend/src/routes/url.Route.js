import express from "express";
import {
  create,
  list,
  redirect,
  updateClickCount,
} from "../controller/url.Controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const urlrouter = express.Router();

urlrouter.post("/url", authenticate, create);

urlrouter.get("/url", authenticate, list);

urlrouter.put("/updateClickCount", authenticate, updateClickCount);

urlrouter.get("/:shortCode", redirect);

export default urlrouter;
