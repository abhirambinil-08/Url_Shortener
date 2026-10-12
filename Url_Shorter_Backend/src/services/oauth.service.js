import { oauth2Client } from "../config/google.js";
import pool from "../config/mysql.js";

export function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/gmail.readonly",
      "https://www.googleapis.com/auth/gmail.send",
      "https://www.googleapis.com/auth/gmail.modify",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });
}

export async function saveTokens(code) {
  // exchange code for tokens
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // get the user's email
  const { google } = await import("googleapis");
  const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
  const { data } = await oauth2.userinfo.get();
  const email = data.email;

  // save to DB
  await pool.query(
    `INSERT INTO oauth_accounts (email, access_token, refresh_token)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       access_token = VALUES(access_token),
       refresh_token = VALUES(refresh_token)`,
    [email, tokens.access_token, tokens.refresh_token],
  );

  return { email };
}