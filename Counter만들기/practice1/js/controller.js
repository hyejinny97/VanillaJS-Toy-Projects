import { renderCount, addHandleCount } from './view.js'
import { state, updateCount } from './model.js'

const controlCount = function (update) {
  updateCount(update);
  renderCount(state.count);
}

const init = function () {
  addHandleCount(controlCount);
}
init();