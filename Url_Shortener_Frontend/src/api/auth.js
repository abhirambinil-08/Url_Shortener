import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const signup  = (data) => API.post("/api/signup", data);
export const login   = (data) => API.post("/api/login", data);
export const signout = ()     => API.post("/api/signout");