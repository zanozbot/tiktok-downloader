import * as functions from 'firebase-functions';
import UserAgent from 'user-agents';

const axios = require("axios")
const cheerio = require("cheerio")
const userAgent = new UserAgent({ deviceCategory: 'mobile' })

exports.downloadVideo = functions.https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    'https://www.tiktok.com/@deborahmilani/video/6808878154556509446',
    {
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const videoObject = $('#videoObject').get();

  if (videoObject.length === 0) {
    return Promise.reject('video-not-found');
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

  return Promise.resolve(video);
});
