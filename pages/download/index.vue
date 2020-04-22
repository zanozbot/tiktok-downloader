<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2" xl="6" offset-xl="3">
        <h1
          class="display-1 font-weight-black mb-8 text-center"
          :class="{'headline': $breakpoint.is.smAndDown}"
        >Your TikTok video is ready for download!</h1>
        <div class="d-flex video-card" :class="{'flex-column': $breakpoint.is.smAndDown}">
          <video loop controls :src="video.videoUrl"></video>
          <div class="d-flex flex-column download-content">
            <div class="d-flex align-center">
              <v-avatar color="secondary">
                <span class="white--text headline">{{ video.name.charAt(0) }}</span>
              </v-avatar>
              <div class="ml-3">
                <div class="title font-weight-bold">{{ video.name }}</div>
                <div class="caption">{{ video.handle }}</div>
              </div>
            </div>

            <v-divider class="mt-4 mb-5"></v-divider>

            <div class="flex-grow-1 mb-5">{{ video.description }}</div>

            <v-btn @click="downloadVideo" color="primary" height="56px" large>
              <v-icon class="mr-3">mdi-download</v-icon>
              <span>Download video</span>
            </v-btn>

            <v-btn to="/" class="mt-4" color="primary" outlined large>
              <span>Download another video</span>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as downlaod from "downloadjs";

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
      downlaod(this.video.videoUrl);
    }
  }
};
</script>

<style lang="scss" scoped>
video {
  max-height: 70vh;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  &:focus {
    outline: none;
  }
}
.download-content {
  border: 1px solid #e0e0e0;
  border-left: none;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 2rem;
}
.video-card.flex-column {
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
</style>