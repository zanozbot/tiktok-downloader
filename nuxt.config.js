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
      { hid: 'og:title', property: 'og:title', content: 'TikTok Video Downloader' },
      { hid: 'description', name: 'description', content: 'TikTok Video Downloader gives you a free online option to download TikTok videos to mp4 and answers your TikTok related questions.' },
      { hid: 'og:description', property: 'og:description', content: 'TikTok Video Downloader gives you a free online option to download TikTok videos to mp4 and answers your TikTok related questions.' },
      { hid: 'og:locale', property: 'og:locale', content: 'en' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://tiktokvideodownloader.online/og-image.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TikTok Video Downloader' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:size', name: 'twitter:site', content: 'TikTok Video Downloader' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Download TikTok videos with best free online TikTok Video Downloader.' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'TikTok Video Downloader gives you a free online option to download TikTok videos to mp4 and answers your TikTok related questions.' },
      { hid: 'twitter:image', name: 'twitter:image:src', content: 'https://tiktokvideodownloader.online/og-image.png' },
      // Apple
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'TikTok Video Downloader' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'TikTok Video Downloader' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://tiktokvideodownloader.online/apple-touch-icon.png' },
      { rel: 'stylesheet', src: 'https://fonts.googleapis.com/css?family=Manrope:400;500;600;700;800' }
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
    '~plugins/breakpoints.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

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
      performance: false,
      analytics: false,
      functions: {
        emulatorPort: 5001
      }
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
