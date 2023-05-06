const countEl = document.querySelector('.count');
const btnContainer = document.querySelector('.main__btn-container');

const renderCount = function (count) {
  countEl.textContent = count;

  countEl.classList.remove('count--black', 'count--green', 'count--red')

  if (count === 0) countEl.classList.add('count--black');
  if (count > 0) countEl.classList.add('count--green');
  if (count < 0) countEl.classList.add('count--red');
}

const addHandleCount = function (handler) {
  btnContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.main__btn-item');
    if (!btn) return

    handler(btn.dataset.update);
  })
}

export { renderCount, addHandleCount }