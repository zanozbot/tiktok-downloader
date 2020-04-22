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

  const videoObject = await $('#videoObject').get();

  if (videoObject.length === 0) {
    return Promise.resolve({ status: 'video-not-found' });
  }

  const content = JSON.parse(videoObject[0].children[0].data);

  const video = {
    status: 'ok',
    name: content.creator.name,
    handle: '@' + content.creator.alternateName,
    description: content.description.substr(content.description.indexOf('.') + 1).trim(),
    videoUrl: content.contentUrl
  }

  return Promise.resolve(video);
});


exports.downloadTikTokVtVideo = functions.https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const description = $('meta[property="og:description"]').attr('content');

  const scripts = (await $('script').get()).filter((s: any) => s.children.length > 0 && s.children[0].data.indexOf('window.__INIT_PROPS__') >= 0);;

  if (scripts.length === 0) {
    return Promise.resolve({ status: 'video-not-found' });
  }

  const content = scripts[0].children[0].data.replace('window.__INIT_PROPS__ =', '').trim();

  const json = JSON.parse(content);
  const videoProps = json['/i18n/share/video/:id'].videoObjectPageProps.videoProps;

  return Promise.resolve(
    {
      status: 'ok',
      name: videoProps.creator.name,
      handle: '@' + videoProps.creator.alternateName,
      description,
      videoUrl: videoProps.contentUrl
    }
  );
});

exports.downloadDouyinVideo = functions.region('asia-east2').https.onCall(async (clientData, context) => {
  const { data } = await axios.get(
    clientData.url,
    {
      headers: { 'User-Agent': userAgent.data.userAgent }
    }
  );

  const $ = await cheerio.load(data);

  const user = $('p.bottom-user').text();
  const description = $('p.bottom-desc').text();
  const videoUrl = $('#theVideo').attr('src');

  if (!user) {
    return Promise.resolve({ status: 'video-not-found' });
  }

  return Promise.resolve(
    {
      status: 'ok',
      name: user.substr(1),
      handle: user,
      description,
      videoUrl
    }
  );
});