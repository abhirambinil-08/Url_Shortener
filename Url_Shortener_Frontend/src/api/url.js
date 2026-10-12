import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const shortenUrl = (userId, longUrl) =>
  API.post("/api/url", { longUrl }, { headers: { "x-user-id": userId } });

export const getUrls = (userId) =>
  API.get("/api/url", { headers: { "x-user-id": userId } });

export function updateClickCount(userId) {
  return API.put(
    "/api/updateClickCount",
    {},
    { headers: { "x-user-id": userId } },
  );
}
