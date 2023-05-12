const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const groceryList = document.querySelector('.grocery');
const errorMessage = document.querySelector('.error-message');
const clearItems = document.querySelector('.clear-items');

const renderGroceryList = function (items) {
  const markup = items.map((item, idx) => {
    return `
      <div class="grocery__item" data-idx=${idx}>
        <p class="grocery__title">${item}</p>
        <div>
          <button class="grocery__btn grocery__btn--edit">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="grocery__btn grocery__btn--delete">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  groceryList.innerHTML = '';
  groceryList.insertAdjacentHTML('afterBegin', markup);
}

const renderForm = function (type = 'add', itemName) {
  form.dataset.type = type;
  formInput.value = type === 'add' ? '' : itemName;
}

const renderErrorMessage = function (msg) {
  errorMessage.textContent = msg;
  errorMessage.classList.remove('hidden');
  setTimeout(() => errorMessage.classList.add('hidden'), 3000);
}

const clearFormInput = function () {
  formInput.value = '';
}

const addHandlerAdd = function (handler) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.dataset.type !== 'add') return;

    const item = new FormData(this).get('item');
    handler(item);
    clearFormInput();
  })
}

const addHandlerEdit = function (handler) {
  let itemIdx;

  groceryList.addEventListener('click', function (e) {
    const editBtn = e.target.closest('.grocery__btn--edit');
    if (!editBtn) return;

    const item = e.target.closest('.grocery__item');
    const itemName = item.querySelector('.grocery__title').textContent;
    itemIdx = item.dataset.idx;
    renderForm('edit', itemName);
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.dataset.type !== 'edit') return;

    const newItem = new FormData(this).get('item');
    handler(itemIdx, newItem);
    renderForm('add');
    clearFormInput();
  })
}

const addHandlerDelete = function (handler) {
  groceryList.addEventListener('click', function (e) {
    const deleteBtn = e.target.closest('.grocery__btn--delete');
    if (!deleteBtn) return;

    const item = e.target.closest('.grocery__item');
    const itemIdx = item.dataset.idx;
    handler(itemIdx);
  })
}

const addHandlerClear = function (handler) {
  clearItems.addEventListener('click', handler);
}

export { renderGroceryList, renderErrorMessage, addHandlerAdd, addHandlerEdit, addHandlerDelete, addHandlerClear }