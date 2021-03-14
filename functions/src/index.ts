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

app.get("/api/download", async (req: any, res: any) => {
  const randomString = Array.from(
    { length: 4 },
    () => Math.random().toString(36)[2]
  ).join("");

  const headers = {
    "User-Agent": randomString,
    Referer: "https://www.tiktok.com/",
    Cookie: "tt_webid_v2=" + randomString
  };

  // TODO: Get URL from req
  const videoMeta = await TikTokScraper.getVideoMeta(
    "https://www.tiktok.com/@venera_creations/video/6925128747318463750",
    headers
  );

  const url = videoMeta.collector[0].videoUrl;
  const fileName = `${videoMeta.collector[0].authorMeta.name}_${videoMeta.collector[0].id}.mp4`;
  const tempFilePath = path.join(os.tmpdir(), fileName);

  await pipeline(
    got.stream(url, { headers: videoMeta.headers }),
    fs.createWriteStream(tempFilePath)
  );

  res.download(tempFilePath);
});

exports.downloadTikTokVideo = functions.https.onRequest(app);
