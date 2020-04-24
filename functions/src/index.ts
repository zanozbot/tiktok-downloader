import * as functions from 'firebase-functions';

const axios = require("axios")
const cheerio = require("cheerio")

exports.downloadTikTokVideo = functions.https.onCall(async (clientData, context) => {
  console.log(clientData.url);

  const { data } = await axios.get(
    clientData.url,
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml'
      }
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