import express from "express";
import { signupUser, loginUser } from "../controller/auth.Controller.js";

const authrouter = express.Router();

authrouter.post("/signup", signupUser);
authrouter.post("/login", loginUser);

export default authrouter;