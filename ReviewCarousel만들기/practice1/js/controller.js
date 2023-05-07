import { renderReview, updateReview, addHandlerMove, addHandlerRandom } from './view.js';
import { state, updateCurReview, updateCurReviewRandom } from './model.js';

const controlMove = function (goTo) {
  updateCurReview(goTo);
  updateReview(state);
}

const controlRandom = function () {
  updateCurReviewRandom();
  updateReview(state);
}

const init = function () {
  renderReview(state);
  addHandlerMove(controlMove);
  addHandlerRandom(controlRandom);
}
init();