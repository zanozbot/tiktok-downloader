<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body has-text-centered">
        <h1 class="title is-size-1-desktop has-text-weight-black">TikTok Video Downloader</h1>
        <h2
          class="subtitle is-size-4-desktop"
        >Download TikTok videos online. On any device. Completely free.</h2>
      </div>
    </section>

    <section class="section">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <label
            class="label is-size-7"
            for="video-url"
            :class="{'has-text-danger': errorMessages.length > 0}"
          >TikTok video URL</label>
          <div class="field has-addons">
            <div class="control">
              <input
                id="video-url"
                v-model="url"
                class="input is-medium"
                type="text"
                @input="errorMessages = []"
                placeholder="Paste TikTok video URL here"
              />
            </div>
            <div class="control">
              <a
                @click="download"
                class="button is-primary is-medium is-fullwidth"
                :class="{'is-loading': isLoading}"
              >Download video</a>
            </div>
          </div>
          <p
            class="help"
            :class="{'is-danger': errorMessages.length > 0}"
          >{{ errorMessages.length > 0 ? errorMessages[0] : 'See the examples below'}}</p>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Examples of supported TikTok video URLs</h3>
          <div class="content">
            <p>Here is an examples which is supported by our free TikTok Video Downloader.</p>

            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-check-circle"></i>
              </span>
              <a
                href="https://www.tiktok.com/@samuelgrubbs/video/6744084223445044485"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.tiktok.com/@samuelgrubbs/video/6744084223445044485</a>
            </p>

            <p>TikTok Video Downloader also support the URLs below, but they have to be extended.</p>
            <p>You can do that by opening them in a new tab and copying the redirected URL.</p>

            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-check-circle"></i>
              </span>
              <a
                href="https://m.tiktok.com/v/6744084223445044485.html"
                target="_blank"
                rel="noopener noreferrer"
              >https://m.tiktok.com/v/6744084223445044485.html</a>
            </p>

            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-check-circle"></i>
              </span>
              <a
                href="https://vt.tiktok.com/MQt5Gk/"
                target="_blank"
                rel="noopener noreferrer"
              >https://vt.tiktok.com/MQt5Gk/</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">What is TikTok?</h3>
          <div class="content">
            <p>TikTok is a Chinese video-sharing social networking service owned by ByteDance.</p>
            <p>It is used to create short dance, lip-sync, comedy, and talent videos.</p>
            <p>The application was merged with musical.ly in 2018 and allows users to create looping short music and lip-sync videos.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Where can I download TikTok videos?</h3>
          <div class="content">
            <p>You have come to the right place.</p>
            <p>
              <strong>TikTok Video Downloader</strong> allows you to do just that.
            </p>
            <p>The following two sections explain in detail how to download TikTok videos for free on PC or mobile.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">How to download TikTok videos for free on PC?</h3>
          <div class="content">
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-1-circle"></i>
              </span>
              <span>
                Head over to
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >https://www.tiktok.com/</a>
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-2-circle"></i>
              </span>
              <span>Navigate to a video you wish to download.</span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-3-circle"></i>
              </span>
              <span>
                Click on the
                <span class="has-text-weight-bold">Copy link</span>
                <span class="icon icon-text">
                  <i class="icon-link"></i>
                </span> button.
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-4-circle"></i>
              </span>
              <span>
                Head back to
                <strong>TikTok Video Downloader</strong>, paste the link in the
                <strong>TikTok video URL</strong> field and click on
                <strong>Download video</strong> button.
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-5-circle"></i>
              </span>
              <span>
                Wait for the video to be processed.
                <strong>Download</strong>. Enjoy! 👌
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">How to download TikTok videos for free on iPhone or Android?</h3>
          <div class="content">
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-1-circle"></i>
              </span>
              <span>Open your TikTok application.</span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-2-circle"></i>
              </span>
              <span>Find a video you wish to download.</span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-3-circle"></i>
              </span>
              <span>
                Click on the
                <span class="has-text-weight-bold">Share</span>
                <span class="icon icon-text">
                  <i class="icon-share"></i>
                </span> button at the bottom right.
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-4-circle"></i>
              </span>
              <span>
                A quick drawer should pop up. Click on the
                <strong>Copy link</strong>
                <span class="icon icon-text">
                  <i class="icon-link"></i>
                </span>
                or
                <strong>Copy link to clipboard</strong>
                <span class="icon icon-text">
                  <i class="icon-clipboard"></i>
                </span>
                button.
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-5-circle"></i>
              </span>
              <span>
                Head back to
                <strong>TikTok Video Downloader</strong>, paste the link in the
                <strong>TikTok video URL</strong> field and click on
                <strong>Download video</strong> button.
              </span>
            </p>
            <p class="custom-item is-flex">
              <span class="icon has-text-primary">
                <i class="icon-numeric-6-circle"></i>
              </span>
              <span>
                Wait for the video to be processed.
                <strong>Download</strong>. Enjoy! 👌
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Am I able to download Live TikTok videos?</h3>
          <div class="content">
            <p>
              Yes, you can download Tik Tok Live videos, but only
              <strong>after</strong> they
              <strong>finish streaming</strong> 🤓.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Can I download TikTok videos without a watermark?</h3>
          <div class="content">
            <p>A lot of other providers try to lure by saying you will be able to download videos without the watermark.</p>
            <p>
              That just
              <strong>isn't true</strong> 🤯. TikTok put the watermark on the videos for a reason.
            </p>
            <p>Remember, someone else made that video content and TikTok owns it.</p>
            <p>Without proper attribution, you are essentially stealing someone's property.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Do I need an account to download TikTok videos?</h3>
          <div class="content">
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
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Where do TikTok videos get saved after being downloaded?</h3>
          <div class="content">
            <p>All of the downloaded videos will be saved into whatever folder your browser set as the default folder for downloads.</p>
            <p>
              There is quite a big chance you will find them in your
              <strong>Downloads</strong> folder 📥.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Is TikTok Video Downloader storing downloaded videos?</h3>
          <div class="content">
            <p>
              We do
              <strong>not</strong> store videos,
              <strong>neither</strong> do we keep copies of them.
            </p>
            <p>All of the videos are hosted on and downloaded from TikTok's servers.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">Is downloading TikTok videos with our service free?</h3>
          <div class="content">
            <p>
              <strong>Yes</strong>, and it will stay like that! 😎
            </p>
            <p>You might see some ads. It's how we cover the processing expenses and further development.</p>
            <p>
              So we kindly ask you to
              <strong>turn off your adblocker</strong>, if you are using one.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-padding-top-less">
      <div class="columns is-centered">
        <div class="column is-10-widescreen">
          <h3 class="title is-5">About TikTok Video Downloader</h3>
          <div class="content">
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
          </div>
        </div>
      </div>
    </section>
  </div>
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
            "name": "TikTok Video Downloader",
            "url": "https://tiktokdownloader.online",
            "description": "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4."
          }`,
        type: "application/ld+json"
      }
    ]
  }
};
</script>

<style lang="scss">
@import "~assets/variables.scss";
.field {
  .control:first-child {
    flex: 1;
  }
  margin-bottom: 0.25rem !important;
}
.hero-body {
  padding-bottom: 0;
}
@media screen and (max-width: 768px) {
  .field {
    flex-direction: column;
    .control:first-child {
      margin-bottom: 1rem;
    }
    .input,
    .button {
      border-radius: $border-radius !important;
    }
  }
}
.custom-item {
  align-items: center;
  .icon:not(.icon-text) {
    font-size: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 0.75rem;
  }
  a {
    word-break: break-all;
  }
}
.label.has-text-danger {
  animation: invalid 200ms;
}
@keyframes invalid {
  0% {
  }
  25% {
    margin-left: 0.5rem;
  }
  40% {
    margin-left: 0;
  }
  50% {
    margin-left: 0.25rem;
  }
  100% {
    margin-left: 0;
  }
}
</style>

