import * as functions from 'firebase-functions';

const axios = require("axios")
const cheerio = require("cheerio")

const random = () => Math.random().toString(36).substr(2, 10);

exports.downloadTikTokVideo = functions.https.onCall(async (clientData, context) => {
  console.log(clientData.url);

  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': random() }
    }
  );

  const $ = await cheerio.load(data);

  const content$ = $('#__NEXT_DATA__').get();
  const content = content$[0].children[0].data;

  const json = JSON.parse(content);

  const videoUrl = json.props.pageProps.videoData.itemInfos.video.urls[0];

  if (!videoUrl) {
    return Promise.resolve({ status: 'video-not-found' });
  }

  const name = json.props.pageProps.videoData.authorInfos.uniqueId;
  const handle = '@' + json.props.pageProps.videoData.authorInfos.nickName;
  const description = json.props.pageProps.videoData.itemInfos.text;

  const video = {
    status: 'ok',
    name,
    handle,
    description,
    videoUrl
  }

  return Promise.resolve(video);
});


exports.downloadTikTokMobileVideo = functions.https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': random() }
    }
  );

  const $ = await cheerio.load(data);

  const canonical = $('link[rel="canonical"]').attr('href');

  console.log(canonical);

  if (!canonical) {
    return Promise.resolve({ status: 'video-not-found' });
  } else {
    return Promise.resolve({ status: 'ok', url: canonical });
  }
});
