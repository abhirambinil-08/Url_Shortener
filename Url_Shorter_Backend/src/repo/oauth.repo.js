import pool from "../config/mysql.js";

export async function findAccountByEmail(email) {
  const [rows] = await pool.query(
    `SELECT * FROM oauth_accounts WHERE email = ?`,
    [email]
  );
  return rows[0] || null;
}

export async function upsertAccount(email, accessToken, refreshToken) {
  await pool.query(
    `INSERT INTO oauth_accounts (email, access_token, refresh_token)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       access_token = VALUES(access_token),
       refresh_token = VALUES(refresh_token)`,
    [email, accessToken, refreshToken]
  );
}