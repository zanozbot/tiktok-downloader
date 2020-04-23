<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link to="/" class="d-flex logo justify-center align-center flex-grow-1">
        <v-img to="/" src="logo@56x56.png" :alt="title" max-height="56" max-width="56"></v-img>
      </nuxt-link>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer class="black mt-5">
      <v-row justify="center" no-gutters>
        <nuxt-link
          class="ma-2 grey--text text--lighten-4 footer-link caption"
          to="/privacy-policy"
        >Privacy Policy</nuxt-link>
        <nuxt-link
          class="ma-2 grey--text text--lighten-4 footer-link caption"
          to="/terms-and-conditions"
        >Terms and Conditions</nuxt-link>
        <v-col cols="12 py-4 grey--text text--lighten-1 text-center caption">
          <strong>{{ title }}</strong> &copy; 2020
        </v-col>
      </v-row>
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

<style lang="scss" scoped>
.footer-link {
  text-decoration: none;

  &:hover {
    box-shadow: 0 2px 0 white;
  }
}
header {
  border-bottom: 1px solid #e0e0e0 !important;
  background-color: white !important;
}
.logo {
  animation: wiggle 2.5s alternate infinite;
}
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
