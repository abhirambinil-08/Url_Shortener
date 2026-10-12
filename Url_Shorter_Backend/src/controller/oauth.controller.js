import { generateAuthUrl, saveTokens } from "../services/oauth.service.js";

export async function getAuthUrl(req, res) {
  try {
    const url = generateAuthUrl();
    res.redirect(url);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function handleCallback(req, res) {
  try {
    const { code } = req.query;
    if (!code) return res.status(400).json({ message: "No code provided" });

    const result = await saveTokens(code);
    res.json({ message: "Gmail connected successfully", email: result.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}