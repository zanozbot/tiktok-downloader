<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1
          :class="{'display-2': $breakpoint.is.mdAndUp, 'display-1': $breakpoint.is.smAndDown}"
          class="font-weight-black mb-2"
        >TikTok Video Dowloader</h1>
        <h2 class="headline">Dowload TikTok videos on any device for free</h2>
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
          hint="See examples below"
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
        <h3 class="title mb-3">Examples of TikTok video URLs</h3>
        <v-divider></v-divider>
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
      const vt = this.isTikTokVtVideo(this.url);
      const normal = this.isTikTokVideo(this.url);

      if (!vt && !normal) {
        this.errorMessages.push("The given video URL is not valid.");
        return;
      }

      this.isLoading = true;
      const { data } = await this.$fireFunc.httpsCallable(
        vt ? "downloadTikTokVtVideo" : "downloadTikTokVideo"
      )({
        url: this.url
      });

      if (data.status === "ok") {
        this.$store.commit("addVideo", data);
        this.$router.push({ path: "/download" });
      } else {
        this.isLoading = false;
        this.errorMessages.push("We couldn't find any video on the given URL.");
      }
    },
    clearUrl: function() {
      this.url = "";
    },
    isTikTokVideo: function(url) {
      return /https:\/\/(m|w{3})\.tiktok.com\/(v\/|@.*\/video\/).*(\.html)*/.test(
        url
      );
    },
    isTikTokVtVideo: function(url) {
      return /https:\/\/vt.tiktok.com\/.*\//.test(url);
    }
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
</style>

