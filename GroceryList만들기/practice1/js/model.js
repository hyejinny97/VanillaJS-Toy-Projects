const state = {
  groceryList: []
}

const validateItem = function (item) {
  if (item === '') throw new Error('아무것도 입력되지 않았습니다.')
}

const addItem = function (item) {
  try {
    validateItem(item);
    state.groceryList.push(item);
    setLocalStorage();
  } catch (error) {
    throw error;
  }
}

const editItem = function (idx, newItem) {
  try {
    validateItem(newItem);
    state.groceryList[idx] = newItem;
    setLocalStorage();
  } catch (error) {
    throw error;
  }
}

const deleteItem = function (idx) {
  try {
    state.groceryList.splice(idx, 1);
    setLocalStorage();
  } catch (error) {
    throw error;
  }
}

const clearItem = function () {
  try {
    state.groceryList = [];
    clearLocalStorage();
  } catch (error) {
    throw error;
  }
}

const setLocalStorage = function () {
  window.localStorage.setItem('groceryList', JSON.stringify(state.groceryList));
}

const getLocalStorage = function () {
  const data = window.localStorage.getItem('groceryList');
  if (!data) return;

  state.groceryList = JSON.parse(data);
}

const clearLocalStorage = function () {
  window.localStorage.clear();
}

const init = function () {
  getLocalStorage();
}
init();

export { state, addItem, editItem, deleteItem, clearItem }