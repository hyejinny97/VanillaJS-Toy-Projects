import { showBurgerBtn, hiddenBurgerBtn, showHorizontalNavbar, hiddenHorizontalNavbar, removeVerticalNavbar, addHandlerResize } from './view.js';
import { state, updateViewportWidth } from './model.js';

const controlResize = function (width) {
  updateViewportWidth(width);

  if (state.viewportWidth <= 768) {
    hiddenHorizontalNavbar();
    showBurgerBtn();
  } else {
    showHorizontalNavbar();
    hiddenBurgerBtn();
    removeVerticalNavbar();
  }
}

const init = function () {
  controlResize(state.viewportWidth);
  addHandlerResize(controlResize);
}
init();