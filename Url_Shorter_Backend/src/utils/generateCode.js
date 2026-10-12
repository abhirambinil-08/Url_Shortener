import crypto from "crypto";

export function generateCode(longUrl) {
  const hash = crypto
    .createHash("sha256")
    .update(longUrl)
    .digest("base64");

  return hash
    .replace(/\+/g, "")
    .replace(/\//g, "")
    .replace(/=/g, "")
    .substring(0, 6);
}