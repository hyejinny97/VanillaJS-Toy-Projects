const colorBox = document.querySelector('.color-box');
const colorText = document.querySelector('.color-text');
const typeList = document.querySelector('.navbar__type-list');
const typeItems = typeList.querySelectorAll('.navbar__type-item');
const colorChangeBtn = document.querySelector('.btn__color-change');

const renderColor = function (color) {
  colorBox.style.backgroundColor = color;
}

const renderColorText = function (color) {
  colorText.innerText = color;
}

const addHandlerType = function (handler) {
  typeList.addEventListener('click', function (e) {
    const typeEl = e.target.closest('.navbar__type-item');
    if (!typeEl) return

    typeItems.forEach(typeItem => typeItem.classList.remove('navbar__type-item--active'));
    typeEl.classList.add('navbar__type-item--active');

    handler(typeEl.dataset.type);
  })
}

const addHandlerColor = function (handler) {
  colorChangeBtn.addEventListener('click', function (e) {
    handler();
  })
}

export { renderColor, renderColorText, addHandlerType, addHandlerColor }