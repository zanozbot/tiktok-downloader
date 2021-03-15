const functions = require("firebase-functions");
const express = require("express");
const fs = require("fs");
const path = require("path");
const os = require("os");

const stream = require("stream");
const { promisify } = require("util");
const got = require("got");

const TikTokScraper = require("tiktok-scraper");

const pipeline = promisify(stream.pipeline);
const app = express();

/**
 * A helper function which returns metadata
 * @param req Request
 * @param res Response
 * @returns TikTok video metadata
 */
async function getMetadata(url: string): Promise<any> {
  const randomString = Array.from(
    { length: 4 },
    () => Math.random().toString(36)[2]
  ).join("");

  const headers = {
    "User-Agent": randomString,
    Referer: "https://www.tiktok.com/",
    Cookie: "tt_webid_v2=" + randomString
  };

  return await TikTokScraper.getVideoMeta(url, headers);
}

/**
 * Downloads the TikTok video
 */
app.get("/api/download", async (req: any, res: any) => {
  const url = req.query.url;

  if (!url) {
    res.status(403).end();
  }

  const videoMeta = await getMetadata(url);

  console.dir(videoMeta, { depth: 4 });

  const videoUrl = videoMeta.collector[0].videoUrl;
  const fileName = `${videoMeta.collector[0].authorMeta.name}_${videoMeta.collector[0].id}.mp4`;
  const tempFilePath = path.join(os.tmpdir(), fileName);

  await pipeline(
    got.stream(videoUrl, { headers: videoMeta.headers }),
    fs.createWriteStream(tempFilePath)
  );

  res.download(tempFilePath);
});

/**
 * Retrieves TikTok video's metadata
 */
exports.videoMetadata = functions.https.onCall(
  async (data: any, context: any) => {
    const url = data.url;

    if (!url) {
      return null;
    }

    const videoMeta = await getMetadata(url);

    const response = {
      cover: videoMeta.collector[0].imageUrl,
      name: videoMeta.collector[0].authorMeta.nickName,
      description: videoMeta.collector[0].text
    };

    return response;
  }
);

exports.app = functions.https.onRequest(app);
