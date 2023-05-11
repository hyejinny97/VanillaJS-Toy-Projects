import { state, generateParagraph } from './model.js';
import { renderParagraph, addHandlerParagraph } from './view.js';

const controlParagraph = function (num) {
  generateParagraph(num);
  renderParagraph(state.curParagraph);
}

const init = function () {
  addHandlerParagraph(controlParagraph);
}
init();