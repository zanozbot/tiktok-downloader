const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'TikTok Video Downloader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', src: 'https://fonts.googleapis.com/css?family=Manrope:400;500;600;700;800' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
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
      functions: true
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
