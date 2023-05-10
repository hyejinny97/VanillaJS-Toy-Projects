import { renderTabBody, addHandlerTab } from './view.js';
import { state, updateCurTab } from './model.js';

const controlTab = function (tab) {
  updateCurTab(tab);
  renderTabBody(state.curTab);
}

const init = function () {
  addHandlerTab(controlTab);
}
init();