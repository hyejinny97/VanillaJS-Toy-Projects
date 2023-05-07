const card = document.querySelector('.card');

const createMarkup = function (state) {
  const { idx, name, job, img, content } = state.curReview;

  return `
  <div class="card__review">
    <img class='card__img' src="${img}" alt="">
    <h3 class='card__name'>${name}</h3>
    <p class='card__job'>${job}</p>
    <p class='card__content'>${content}</p>
  </div>
  <div class="card__btn-container">
    <button class="card__btn-move card__btn-move--prev" data-go-to="${idx === 0 ? state.reviews.length - 1 : idx - 1}">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="card__btn-move card__btn-move--next" data-go-to="${idx === state.reviews.length - 1 ? 0 : idx + 1}">
      <i class="fas fa-chevron-right"></i>
    </button>
    <button class="card__btn-random">Surprise Me</button>
  </div>
  `;
}

const renderReview = function (state) {
  const markup = createMarkup(state);

  card.innerText = '';
  card.insertAdjacentHTML("afterbegin", markup);
}

const updateReview = function (state) {
  const newMarkup = createMarkup(state);

  const newDOM = document.createRange().createContextualFragment(newMarkup);
  const newElements = Array.from(newDOM.querySelectorAll('*'));
  const curElements = Array.from(card.querySelectorAll('*'));

  newElements.forEach((newEl, i) => {
    const curEl = curElements[i];

    // Updates changed TEXT
    if (
      !newEl.isEqualNode(curEl) &&
      newEl.firstChild?.nodeValue.trim() !== ''
    ) {
      curEl.textContent = newEl.textContent;
    }

    // Updates changed ATTRIBUTES
    if (!newEl.isEqualNode(curEl))
      Array.from(newEl.attributes).forEach(attr =>
        curEl.setAttribute(attr.name, attr.value)
      );
  });
}

const addHandlerMove = function (handler) {
  const btnContainer = document.querySelector('.card__btn-container');
  btnContainer.addEventListener('click', function (e) {
    const moveBtn = e.target.closest('.card__btn-move');
    if (!moveBtn) return

    const goTo = +moveBtn.dataset.goTo;
    handler(goTo);
  })
}

const addHandlerRandom = function (handler) {
  const randomBtn = document.querySelector('.card__btn-random');
  randomBtn.addEventListener('click', () => handler());
}

export { renderReview, updateReview, addHandlerMove, addHandlerRandom }