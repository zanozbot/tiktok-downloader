import * as functions from 'firebase-functions';
import UserAgent from 'user-agents';

const axios = require("axios")
const cheerio = require("cheerio")
const userAgent = new UserAgent({ deviceCategory: 'mobile' })

exports.downloadTikTokVideo = functions.https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const content = $('#__NEXT_DATA__').get();

  const json = JSON.parse(content[0].children[0].data);

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
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const scripts = $('script').get().filter((s: any) => {
    if (s.children.length > 0) {
      const d = s.children[0].data;
      if (d.indexOf('window.__INIT_PROPS__') >= 0) {
        return true;
      }
    }
    return false;
  });

  if (scripts.length === 0) {
    return Promise.resolve({ status: 'video-not-found' });
  }

  const content = scripts[0].children[0].data.replace('window.__INIT_PROPS__ =', '').trim();

  return Promise.resolve(content)
    .then(c => JSON.parse(c))
    .then(json => {
      const videoData = json[Object.keys(json)[0]].videoData;

      const videoUrl = videoData.itemInfos.video.urls[0];
      const description = videoData.itemInfos.text;
      const name = videoData.authorInfos.nickName;
      const handle = '@' + videoData.authorInfos.uniqueId;

      return Promise.resolve(
        {
          status: 'ok',
          name,
          handle,
          description,
          videoUrl
        }
      );
    });
});

// exports.downloadDouyinVideo = functions.region('asia-east2').https.onCall(async (clientData, context) => {
//   const { data } = await axios.get(
//     clientData.url,
//     {
//       headers: { 'User-Agent': userAgent.data.userAgent }
//     }
//   );

//   const $ = await cheerio.load(data);

//   const user = $('p.bottom-user').text();
//   const description = $('p.bottom-desc').text();
//   const videoUrl = $('#theVideo').attr('src');

//   if (!user) {
//     return Promise.resolve({ status: 'video-not-found' });
//   }

//   return Promise.resolve(
//     {
//       status: 'ok',
//       name: user.substr(1),
//       handle: user,
//       description,
//       videoUrl
//     }
//   );
// });