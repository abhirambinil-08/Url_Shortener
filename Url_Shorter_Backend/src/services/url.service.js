import {
  createUrl,
  findUrlsByUserId,
  findUrlByShortCode,
  updateClickCount as updateClickCountRepo,
} from "../repo/url.repo.js";

import redis from "../config/redis.js";

export async function createShortUrl(userId, longUrl, shortCode) {
  await createUrl(userId, longUrl, shortCode);

  return {
    message: "Short URL Created",
    shortUrl: `http://localhost:3000/api/${shortCode}`,
  };
}

export async function getUrls(userId) {
  return await findUrlsByUserId(userId);
}

export async function redirect(shortCode) {
  const url = await findUrlByShortCode(shortCode);

  if (!url) {
    throw new Error("Short URL not found");
  }

  await redis.zIncrBy(
    `user:${url.user_id}:clicks`,
    1,
    url.short_code
  );

  await redis.expire(
    `user:${url.user_id}:clicks`,
    604800
  );

  return url.long_url;
}

export async function updateClickCount(userId) {
  const key = `user:${userId}:clicks`;

  const urls = await redis.zRangeWithScores(
    key,
    0,
    -1
  );

  console.log(urls);

  for (const url of urls) {
    console.log(
      "Updating:",
      url.value,
      url.score
    );

    const result = await updateClickCountRepo(
      url.value,
      Number(url.score)
    );

    console.log(result);
  }

  return {
    message: "All click counts updated successfully",
  };
}