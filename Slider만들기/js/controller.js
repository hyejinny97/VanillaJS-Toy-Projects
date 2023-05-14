import { goToSlide, addHandlerSlideMove } from './view.js';
import { state, prevSlide, nextSlide } from './model.js';

const controlSlideMove = function (move) {
  if (move === 'prev') prevSlide();
  if (move === 'next') nextSlide();
  goToSlide(state);
}

const init = function () {
  addHandlerSlideMove(controlSlideMove);
}
init();