<template>
  <v-app>
    <v-app-bar elevate-on-scroll fixed app>
      <v-img
        class="mr-2"
        src="https://via.placeholder.com/40"
        :alt="title"
        max-height="40"
        max-width="40"
      ></v-img>
      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp"
        class="headline-title font-weight-bold"
        v-text="title"
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :large="$vuetify.breakpoint.mdAndUp"
        :small="$vuetify.breakpoint.smAndDown"
        color="primary"
      >
        <v-icon class="mr-1">mdi-play</v-icon>
        <span>Watch now</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app>
      <span>{{ title }} &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "TikTok Video Downloader"
    };
  }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}

.headline-title {
  font-size: 1.8rem;
}
</style>
