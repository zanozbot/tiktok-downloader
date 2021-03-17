<template>
  <div id="app">
    <span class="fork-wrapper">
      <a
        class="fork"
        target="_blank"
        href="https://github.com/zanozbot/tiktok-downloader"
        >Fork me on GitHub</a
      >
    </span>
    <header>
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
    </header>

    <main>
      <nuxt />
    </main>

    <footer class="footer has-background-black">
      <div
        class="content has-text-centered has-text-white is-size-7 has-text-weight-bold"
      >
        <div class="is-flex footer-links">
          <nuxt-link
            class="ma-2 has-text-white footer-link caption"
            to="/privacy-policy"
            >Privacy Policy</nuxt-link
          >
          <nuxt-link
            class="ma-2 has-text-white footer-link caption"
            to="/terms-and-conditions"
            >Terms and Conditions</nuxt-link
          >
        </div>
        <p>TikTok Video Downloader © 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fork-wrapper {
  position: fixed;
  display: block;
  top: 0;
  right: -10px;
  width: 200px;
  overflow: hidden;
  height: 200px;
  z-index: 9999;

  .fork {
    background: #fe2c55;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    padding: 5px 45px;
    font-size: 1rem;
    line-height: 2rem;
    position: absolute;
    top: 45px;
    right: -40px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

    &::before,
    &::after {
      content: "";
      width: 100%;
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      height: 1px;
      background: #fff;
    }

    &::after {
      bottom: 1px;
      top: auto;
    }
  }
  @media screen and (max-width: 800px) {
    .fork {
      font-size: 0.75rem;
      top: 25px;
    }
  }
}

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
header {
  position: sticky;
  z-index: 1;
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
