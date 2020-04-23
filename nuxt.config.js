const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Online and Free | TikTok Video Downloader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title', property: 'og:title', content: 'Online and Free | TikTok Video Downloader' },
      { hid: 'description', name: 'description', content: 'TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.' },
      { hid: 'og:description', property: 'og:description', content: 'TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.' },
      { hid: 'og:locale', property: 'og:locale', content: 'en' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://tiktokvideodownloader.online/og-image.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TikTok Video Downloader' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:size', name: 'twitter:site', content: 'TikTok Video Downloader' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Download TikTok videos online with TikTok Video Downloader. Completely free.' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.' },
      { hid: 'twitter:image', name: 'twitter:image:src', content: 'https://tiktokvideodownloader.online/twitter-image.png' },
      // Apple
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'TikTok Video Downloader' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'TikTok Video Downloader' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://tiktokvideodownloader.online/apple-touch-icon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fe2c55' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/breakpoints.js',
    '~/plugins/jsonld'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    '@nuxtjs/pwa'
  ],

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },

  pwa: {
    manifest: {
      name: 'TikTok Video Downloader',
      lang: 'en',
      short_name: "TikTok Downloader",
      description: 'TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.',
      background_color: "#fff",
      theme_color: "#fe2c55",
      start_url: "/"
    }
  },

  firebase: {
    config: {
      apiKey: "AIzaSyC6yl_8Acpvr39Dj3-mWuxm0Hm7RuQBdAk",
      authDomain: "tiktok-video-downloader-free.firebaseapp.com",
      databaseURL: "https://tiktok-video-downloader-free.firebaseio.com",
      projectId: "tiktok-video-downloader-free",
      storageBucket: "tiktok-video-downloader-free.appspot.com",
      messagingSenderId: "189013497205",
      appId: "1:189013497205:web:37800f11f50f9853e7ef3c",
      measurementId: "G-BK6V9Z6K13"
    },
    services: {
      performance: true,
      analytics: true,
      functions: true
    }
  },

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    optionsPath: './vuetify.options.js',
    treeShake: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
