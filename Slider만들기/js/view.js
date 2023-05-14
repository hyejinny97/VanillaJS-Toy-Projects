const sliderList = document.querySelector('.slider__item-list');
const controlBtnContainer = document.querySelector('.control');

const goToSlide = function (state) {
  console.log(-state.curSlide * (100 / state.totSlide));

  sliderList.style.transform = `translateX(-${state.curSlide * (100 / state.totSlide)}%)`;
}

const addHandlerSlideMove = function (handler) {
  controlBtnContainer.addEventListener('click', function (e) {
    const controlBtn = e.target.closest('.control__btn');
    if (!controlBtn) return

    handler(controlBtn.dataset.move)
  })
}

export { goToSlide, addHandlerSlideMove }