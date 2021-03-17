# TikTok Video Downloader <img src="https://nuxtjs.org/logos/built-with-nuxt.svg" alt="drawing" width="200"/>

> Download TikTok videos online with TikTok Video Downloader. Completely free.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a href="https://www.buymeacoffee.com/zanozbot">
  <img alt="Buy Me A Coffee" src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" style="height: auto !important; width: auto !important;" />
</a>

## About

I created TikTok Video Downloader with the intention of learning a new technology.
It was designed to be used as an standalone app, so you are not required to install anything else.
As long as you are online and with a TikTok video link you are all set and ready to download.
After the video link has been processed, you will be able to download the video as a mp4.

## Getting started

Navigate to [Firebase Console](https://console.firebase.google.com/) and create a new project.
Create a new app, copy the config and replace the lines 148-155 in `nuxt.config.js` with your app's config.

In the Firebase Console configure Firebase Hosting, Firebase Functions, and enable Firebase Analytics. In order to use Firebase Functions you'll have to upgrade your project to a paid version. Keep in mind Google has a very generous free plan.

> Always set a budget limit for you projects.

Finally, navigate to the project in your console of choice and link your newly created Firebase project.

```bash
$ firebase init
```

Select to use Firebase Functions and Firebase Hosting. Do the same for the emulators. Keep all the defaults export change the public folder to `dist`. Press `n` for all overrides.

## Build

### Nuxt

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

### Firebase functions

```bash
$ cd functions

# install dependencies
$ npm install

# serve at localhost:5001
$ npm run serve
```

## Test

## Deploy

To deploy your application and Firebase Function run the following command:

```bash
$ firebase deploy
```

To deploy just the functions or the hosting part use the `--only` flag.

## License

See the [LICENSE file](LICENSE.md) for license rights and limitations (MIT).
