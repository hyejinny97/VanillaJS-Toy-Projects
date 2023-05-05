import { state, changeType, changeColor } from './model.js'
import { renderColor, renderColorText, addHandlerType, addHandlerColor } from './view.js'

const controlTypeChange = function (type) {
  changeType(type);
  controlColorChange();
}

const controlColorChange = function () {
  changeColor();
  renderColor(state.color);
  renderColorText(state.color);
}

const init = function () {
  addHandlerType(controlTypeChange);
  addHandlerColor(controlColorChange);
}
init();