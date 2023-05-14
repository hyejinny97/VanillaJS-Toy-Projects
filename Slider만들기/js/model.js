const state = {
  curSlide: 0,
  totSlide: 5,
}

const prevSlide = function () {
  state.curSlide = state.curSlide === 0 ? state.totSlide - 1 : state.curSlide - 1;
}

const nextSlide = function () {
  state.curSlide = state.curSlide === state.totSlide - 1 ? 0 : state.curSlide + 1;
}

export { state, prevSlide, nextSlide }