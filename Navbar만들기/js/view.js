const horizontalNavbar = document.querySelector('.navbar__list--horizontal');
const verticalNavbar = document.querySelector('.navbar__list--vertical');
const burgerBtn = document.querySelector('.burger-btn');

const showBurgerBtn = function () {
  burgerBtn.classList.remove('hidden');
}

const hiddenBurgerBtn = function () {
  burgerBtn.classList.add('hidden');
}

const showHorizontalNavbar = function () {
  horizontalNavbar.classList.remove('hidden');
}

const hiddenHorizontalNavbar = function () {
  horizontalNavbar.classList.add('hidden');
}

const toggleVerticalNavbar = function () {
  verticalNavbar.classList.toggle('hidden');
}

const removeVerticalNavbar = function () {
  verticalNavbar.classList.add('hidden');
}

const addHandlerResize = function (handler) {
  window.addEventListener('resize', function () {
    handler(window.innerWidth);
  })
}

const handleBurger = function () {
  burgerBtn.addEventListener('click', function () {
    toggleVerticalNavbar();
  })
}

const init = function () {
  handleBurger();
}
init();

export { showBurgerBtn, hiddenBurgerBtn, showHorizontalNavbar, hiddenHorizontalNavbar, removeVerticalNavbar, addHandlerResize }