import Url from "../model/url.js";

export async function createUrl(userId, longUrl, shortCode) {
  return await Url.create({
    user_id: userId,
    long_url: longUrl,
    short_code: shortCode,
  });
}

export async function findUrlsByUserId(userId) {
  return await Url.findAll({
    where: { user_id: userId },
    attributes: ["id", "long_url", "short_code", "click_count"],
  });
}

export async function findUrlByShortCode(shortCode) {
  return await Url.findOne({
    where: {
      short_code: shortCode,
    },
  });
}

export async function updateClickCount(shortCode, count) {
  return await Url.update(
    {
      click_count: count,
    },
    {
      where: {
        short_code: shortCode,
      },
    },
  );
}
