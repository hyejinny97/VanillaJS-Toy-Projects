import { playVideo, pauseVideo, addHandlerPlay } from './view.js';
import { state, updateVideoPlay } from './model.js';

const controlPlay = function (play) {
  updateVideoPlay(play);

  if (state.videoPlay) playVideo();
  else pauseVideo();
}

const init = function () {
  addHandlerPlay(controlPlay);
}
init();