<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1
          :class="{'display-2': $breakpoint.is.mdAndUp, 'display-1': $breakpoint.is.smAndDown}"
          class="font-weight-black mb-2"
        >TikTok Video Downloader</h1>
        <h2 class="headline">Download TikTok videos online. On any device. Completely free.</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        lg="8"
        offset-lg="2"
        class="d-flex download-field"
        :class="{'flex-column': $breakpoint.is.smAndDown}"
      >
        <v-text-field
          v-model="url"
          filled
          :loading="isLoading"
          clear-icon="mdi-close"
          clearable
          @input="errorMessages = []"
          :error-messages="errorMessages"
          label="TikTok video URL"
          placeholder="Paste TikTok video URL here"
          :disabled="isLoading"
          type="text"
          hint="See the examples below"
          persistent-hint
          @click:clear="clearUrl"
        ></v-text-field>
        <v-btn
          @click="download"
          :loading="isLoading"
          :disabled="isLoading"
          color="primary"
          height="56px"
          large
        >Download video</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Examples of supported TikTok video URLs</h3>
        <v-divider class="mb-3"></v-divider>
        <p class="mb-0">Here is an examples which is supported by our free TikTok Video Downloader.</p>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a
                  href="https://www.tiktok.com/@samuelgrubbs/video/6744084223445044485"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://www.tiktok.com/@samuelgrubbs/video/6744084223445044485</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <p>TikTok Video Downloader also support the URLs below, but they have to be extended.</p>
        <p class="mb-0">You can do that by opening them in a new tab and copying the redirected URL.</p>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a
                  href="https://m.tiktok.com/v/6744084223445044485.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://m.tiktok.com/v/6744084223445044485.html</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a
                  href="https://vt.tiktok.com/MQt5Gk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://vt.tiktok.com/MQt5Gk/</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">What is TikTok?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>TikTok is a Chinese video-sharing social networking service owned by ByteDance.</p>
        <p>It is used to create short dance, lip-sync, comedy, and talent videos.</p>
        <p>The application was merged with musical.ly in 2018 and allows users to create looping short music and lip-sync videos.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Where can I download TikTok videos?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>You have come to the right place.</p>
        <p>
          <strong>TikTok Video Downloader allows you to do just that</strong>.
        </p>
        <p>The following two sections explain in detail how to download TikTok videos for free on PC or mobile.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">How to download TikTok videos for free on PC?</h3>
        <v-divider class="mb-3"></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-1-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Head over to
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://www.tiktok.com/</a>.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-2-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Navigate to a video you wish to download.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-3-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Click on the Copy link
                <v-icon class="mr-1">icon-link-variant</v-icon>button.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-4-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Head back to
                <strong>TikTok Video Downloader</strong>, paste the link in the
                <span
                  class="caption grey lighten-3 pa-2 rounded"
                >TikTok video URL</span> field and
                click on Download video button.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-5-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Wait for the video to be processed. Download. Enjoy! 👌</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3
          class="title font-weight-bold mb-3"
        >How to download TikTok videos for free on iPhone or Android?</h3>
        <v-divider class="mb-3"></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-1-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Open your TikTok application.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-2-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Find a video you wish to download.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-3-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Click on the Share
                <v-icon class="mr-1">icon-share</v-icon>button at the bottom right.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-4-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                A quick drawer should pop up. Click on the Copy link
                <v-icon class="mr-1">icon-link</v-icon>or Copy link to clipboard
                <v-icon class="mr-1">icon-clipboard</v-icon>button.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-5-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Head back to
                <strong>TikTok Video Downloader</strong>, paste the link in the
                <span
                  class="caption grey lighten-3 pa-2 rounded"
                >TikTok video URL</span> field and
                click on Download video button.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">icon-numeric-6-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Wait for the video to be processed. Download. Enjoy! 👌</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Am I able to download Live TikTok videos?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>
          Yes, you can download Tik Tok Live videos, but only
          <strong>after</strong> they
          <strong>finish streaming</strong> 🤓.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Can I download TikTok videos without a watermark?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>A lot of other providers try to lure by saying you will be able to download videos without the watermark.</p>
        <p>
          That just
          <strong>isn't true</strong> 🤯. TikTok put the watermark on the videos for a reason.
        </p>
        <p>Remember, someone else made that video content and TikTok owns it.</p>
        <p>Without proper attribution, you are essentially stealing someone's property.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Do I need an account to download TikTok videos?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>
          You
          <strong>don't need</strong> an account to watch popular TikTok videos 🤩.
        </p>
        <p>
          All you have to do is download the TikTok app or navigate to
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.tiktok.com/</a>.
        </p>
        <p>Which is more than enough to get the video link of you liking and download the video.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3
          class="title font-weight-bold mb-3"
        >Where do TikTok videos get saved after being downloaded?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>All of the downloaded videos will be saved into whatever folder your browser set as the default folder for downloads.</p>
        <p>
          There is quite a big chance you will find them in your
          <strong>Downloads folder</strong> 📥.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3
          class="title font-weight-bold mb-3"
        >Is TikTok Video Downloader storing downloaded videos?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>
          We do
          <strong>not</strong> store videos,
          <strong>neither</strong> do we keep copies of them.
        </p>
        <p>All of the videos are hosted on and downloaded from TikTok's servers.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">Is downloading TikTok videos with our service free?</h3>
        <v-divider class="mb-3"></v-divider>
        <p>
          <strong>Yes</strong>, and it will stay like that! 😎
        </p>
        <p>You might see some ads. It's how we cover the processing expenses and further development.</p>
        <p>
          So we kindly ask you to
          <strong>turn off your adblocker</strong>, if you are using one.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8" offset-lg="2">
        <h3 class="title font-weight-bold mb-3">About TikTok Video Downloader</h3>
        <v-divider class="mb-3"></v-divider>
        <p>
          We created
          <strong>TikTok Video Downloader</strong> with the intention of learning new technology.
        </p>
        <p>This downloader is one of the best video downloaders out there, without the nonsense other providers might feed you with.</p>
        <p>It was designed to be used as an standalone app, so you are not required to install anything else.</p>
        <p>As long as you are online and with a TikTok video link you are all set and ready to download.</p>
        <p>
          After the video link has been processed, you will be able to download the video as a
          <strong>mp4</strong>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: "",
      isLoading: false,
      errorMessages: []
    };
  },
  methods: {
    download: async function() {
      if (this.isTikTokVideoShortened(this.url)) {
        this.errorMessages.push("The given URL needs to be extended.");
        this.$fireAnalytics.logEvent("short_url");
        return;
      }

      if (!this.isTikTokVideo(this.url)) {
        this.errorMessages.push("The given video URL is not valid.");
        this.$fireAnalytics.logEvent("invalid_url");
        return;
      }

      this.isLoading = true;

      const { data } = await this.$fireFunc.httpsCallable(
        "downloadTikTokVideo"
      )({
        url: this.url
      });

      if (data.status === "ok") {
        this.$store.commit("addVideo", data);
        this.$router.push({ path: "/download" });
        this.$fireAnalytics.logEvent("video_found");
      } else {
        this.isLoading = false;
        this.errorMessages.push("We couldn't find any video on the given URL.");
        this.$fireAnalytics.logEvent("video_not_found");
      }
    },
    clearUrl: function() {
      this.url = "";
    },
    isTikTokVideo: function(url) {
      return /https:\/\/(www.)*tiktok.com\/@.*/.test(url);
    },
    isTikTokVideoShortened: function(url) {
      return /https:\/\/(vt|m).tiktok.com\/(v\/)*.*/.test(url);
    }
  },
  head: {
    __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "TikTok Video Downloader",
            url: "https://tiktokdownloader.online",
            description: "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4."
          }`,
        type: "application/ld+json"
      }
    ]
  }
};
</script>

<style lang="scss">
.download-field:not(.flex-column) {
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .v-input__slot {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.rounded {
  border-radius: 4px;
}
.v-list-item .v-list-item__title {
  text-overflow: unset;
  line-height: 1.8 !important;
  white-space: normal;
  overflow: hidden;
  a {
    overflow-x: auto;
  }
}
</style>

