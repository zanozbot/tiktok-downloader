export const state = () => ({
  video: null
});

export const mutations = {
  addVideo(state, video) {
    state.video = video;
  }
};