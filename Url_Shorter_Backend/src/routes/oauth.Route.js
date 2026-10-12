import express from "express";
import { getAuthUrl, handleCallback } from "../controller/oauth.Controller.js";

const oauthRouter = express.Router();

oauthRouter.get("/auth", getAuthUrl);
oauthRouter.get("/auth/callback", handleCallback);

export default oauthRouter;
