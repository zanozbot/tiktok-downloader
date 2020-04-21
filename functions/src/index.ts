import * as functions from 'firebase-functions';
import UserAgent from 'user-agents';

const axios = require("axios")
const cheerio = require("cheerio")
const userAgent = new UserAgent({ deviceCategory: 'mobile' })

// onCall
exports.downloadVideo = functions.https.onRequest(async (req, res) => {
  const { data } = await axios.get(
    'https://www.tiktok.com/@deborahmilani/video/6808878154556509446',
    {
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const videoObject = $('#videoObject').get();

  if (videoObject.length === 0) {
    res.status(200).send('Not found.');
    return;
  }

  const content = JSON.parse(videoObject[0].children[0].data);

  const interactions = content.interactionStatistic.map((interaction: any) => {
    const type = interaction.interactionType['@type'].substr('http://schema.org/'.length);
    return { type, count: interaction.userInteractionCount };
  });

  const video = {
    name: content.creator.name,
    handle: '@' + content.creator.alternateName,
    description: content.description.substr(content.description.indexOf('.') + 1).trim(),
    uploadDate: content.uploadDate,
    videoUrl: content.contentUrl,
    interactions
  }

  res.status(200).send(video);
});
