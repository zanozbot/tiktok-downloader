<template>
  <div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-8-desktop is-7-widescreen">
          <h1
            class="title has-text-weight-black has-text-centered"
          >Your TikTok video is ready for download!</h1>
          <div class="is-flex video-card">
            <img :src="video.cover" :alt="video.description">
            <div class="is-flex flex-column download-content">
              <div class="is-flex align-center">
                <div class="avatar is-flex align-center has-background-primary">
                  <span
                    class="has-text-weight-bold is-uppercase has-text-white"
                  >{{ video.name.charAt(0) }}</span>
                </div>
                <div>
                  <div class="subtitle has-text-weight-bold">{{ video.name }}</div>
                  <div class="is-size-7">{{ video.handle }}</div>
                </div>
              </div>

              <div class="video-description">{{ video.description }}</div>

              <button class="button is-medium is-primary" @click="downloadVideo">
                <span class="icon has-text-white">
                  <i class="icon-download"></i>
                </span>
                <span>Download video</span>
              </button>

              <nuxt-link to="/" class="button is-primary is-outlined">Download another video</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "hasVideo",
  head: {
    title: "Download ready | TikTok Video Downloader",
    meta: [
      {
        hid: "og:title",
        property: "og:title",
        content: "Download ready | TikTok Video Downloader"
      }
    ]
  },
  computed: {
    video() {
      return this.$store.state.video;
    }
  },
  methods: {
    downloadVideo: function() {
      try {
        // TODO: Download video
        this.$fire.analytics.logEvent("video_downloaded");
      } catch (error) {
        this.$fire.analytics.logEvent("video_download_error", {
          error: error.toString()
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.align-center {
  align-items: center;
}
.flex-column {
  flex-direction: column;
}
.video-description {
  margin: 1.5rem 0;
  flex: 1;
}
img {
  max-height: 70vh;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  &:focus {
    outline: none;
  }
}
.button:not(:last-child) {
  margin-bottom: 0.75rem;
}
.download-content {
  border: 1px solid #e0e0e0;
  border-left: none;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 2rem;
  flex: 1;
  .avatar {
    margin-right: 0.75rem;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    justify-content: center;
  }
  .subtitle {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 768px) {
  .video-card {
    flex-direction: column;
    video {
      border-radius: 0;
      border: 1px solid #e0e0e0;
      border-bottom: none;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      height: 60vh;
    }
    .download-content {
      border-top-right-radius: 0;
      border: 1px solid #e0e0e0;
      border-top: none;
      border-bottom-left-radius: 16px;
      padding: 1rem;
    }
  }
}
</style>