const state = {
  viewportWidth: 0,
}

const updateViewportWidth = function (width) {
  state.viewportWidth = width;
}

export { state, updateViewportWidth }