<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2" xl="6" offset-xl="3">
        <h1
          class="display-1 font-weight-black mb-8 text-center"
          :class="{'headline': $breakpoint.is.smAndDown}"
        >Your TikTok video is ready for download!</h1>
        <div class="d-flex video-card" :class="{'flex-column': $breakpoint.is.smAndDown}">
          <video
            loop
            controls
            src="https://v19.muscdn.com/f12e2dea646ef6ba280e1ebc65f100e6/5e9e3095/video/tos/useast2a/tos-useast2a-ve-0068c003/f091d57eeace4b7fa44dea3f78f68f15/?a=1233&br=2706&bt=1353&cr=0&cs=0&dr=0&ds=3&er=&l=202004201730090101150040560AACFC07&lr=tiktok_m&qs=0&rc=M2R4aGU8dHN5czMzaTczM0ApOjk7aTxnO2VmN2loZTY8ZGcwbF40ZW4xcHJfLS1gMTZzczA1LmEzNC4xXzIzYTJjXzE6Yw%3D%3D&vl=&vr="
          ></video>
          <div class="d-flex flex-column download-content">
            <div class="d-flex align-center">
              <v-avatar color="secondary">
                <span class="white--text headline">D</span>
              </v-avatar>
              <div class="ml-3">
                <div class="title font-weight-bold">Deborahmilani</div>
                <div class="caption">@deborahmilani</div>
              </div>
            </div>

            <v-divider class="mt-4 mb-5"></v-divider>

            <div
              class="flex-grow-1 mb-5"
            >The faces you make when you realize the dogs are fighting over a stuffed animal that looks just like you... #fyp #foryou #foryoupage #catanddog #simba</div>

            <v-btn color="primary" height="56px" large>
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
export default {};
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