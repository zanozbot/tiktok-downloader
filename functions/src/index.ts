import * as functions from 'firebase-functions';

const axios = require("axios")
const cheerio = require("cheerio")

const userAgents = [
  'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 6.0.1; SM-G935S Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.1.2; AFTMM Build/NS6265; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36'
];

exports.downloadTikTokVideo = functions.https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)] }
    }
  );

  const $ = await cheerio.load(data);

  const content = await $('#__NEXT_DATA__').get();

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
      headers: { 'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)] }
    }
  );

  const $ = await cheerio.load(data);

  const scripts = await $('script').get();

  const filteredScripts = scripts.filter((s: any) => {
    if (s && s.children.length > 0) {
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

  const content = filteredScripts[0].children[0].data.replace('window.__INIT_PROPS__ =', '').trim();

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