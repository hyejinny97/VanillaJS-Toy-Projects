import { renderGroceryList, renderErrorMessage, addHandlerAdd, addHandlerEdit, addHandlerDelete, addHandlerClear } from './view.js';
import { state, addItem, editItem, deleteItem, clearItem } from './model.js';

const controlAdd = function (item) {
  try {
    addItem(item);
    renderGroceryList(state.groceryList);
  } catch (error) {
    renderErrorMessage(error.message);
  }
}

const controlEdit = function (idx, newItem) {
  try {
    editItem(idx, newItem);
    renderGroceryList(state.groceryList);
  } catch (error) {
    renderErrorMessage(error.message);
  }
}

const controlDelete = function (idx) {
  try {
    deleteItem(idx);
    renderGroceryList(state.groceryList);
  } catch (error) {
    renderErrorMessage(error.message);
  }
}

const controlItemsClear = function () {
  try {
    clearItem();
    renderGroceryList(state.groceryList);
  } catch (error) {
    renderErrorMessage(error.message);
  }
}

const init = function () {
  renderGroceryList(state.groceryList);
  addHandlerAdd(controlAdd);
  addHandlerEdit(controlEdit);
  addHandlerDelete(controlDelete);
  addHandlerClear(controlItemsClear);
}
init();