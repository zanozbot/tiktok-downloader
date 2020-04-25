<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img
            class="logo"
            src="logo@56x56.png"
            alt="TikTok Video Downloader"
            width="56"
            height="56"
          />
        </nuxt-link>
      </div>
    </nav>

    <div id="content">
      <nuxt />
    </div>

    <footer class="footer has-background-black">
      <div class="content has-text-centered has-text-white is-size-7 has-text-weight-bold">
        <div class="is-flex footer-links">
          <nuxt-link
            class="ma-2 has-text-white footer-link caption"
            to="/privacy-policy"
          >Privacy Policy</nuxt-link>
          <nuxt-link
            class="ma-2 has-text-white footer-link caption"
            to="/terms-and-conditions"
          >Terms and Conditions</nuxt-link>
        </div>
        <p>TikTok Video Downloader © 2020</p>
      </div>
    </footer>
  </div>

  <!-- <v-app>
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
  </v-app>-->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-links {
  justify-content: center;
  margin-bottom: 1.5rem;
  .footer-link {
    text-decoration: none;

    &:hover {
      box-shadow: 0 2px 0 white;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
nav {
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e0e0e0 !important;
  .navbar-brand {
    justify-content: center;
    width: 100%;
    .navbar-item img {
      max-height: none;
    }
  }
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
