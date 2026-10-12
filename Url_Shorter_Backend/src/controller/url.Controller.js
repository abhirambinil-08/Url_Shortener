import {
  createShortUrl,
  getUrls,
  redirect as redirectUrl,
  updateClickCount as updateClickCountService,
} from "../services/url.service.js";

import { generateCode } from "../utils/generateCode.js";

export async function create(req, res) {
  try {
    const { longUrl } = req.body;

    const shortCode = generateCode(longUrl);

    const result = await createShortUrl(req.user.id, longUrl, shortCode);

    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function list(req, res) {
  try {
    const urls = await getUrls(req.user.id);

    res.json(urls);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function redirect(req, res) {
  try {
    const longUrl = await redirectUrl(req.params.shortCode);

    res.redirect(longUrl);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
}

export async function updateClickCount(req, res) {
  try {
    const result = await updateClickCountService(req.user.id);

    res.json(result);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
}
