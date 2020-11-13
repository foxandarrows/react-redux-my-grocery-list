import { CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from "./actionTypes";

// Action Creators
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    item
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index
  };
}

export function editItem(index) {
  return {
    type: EDIT_ITEM,
    index,
  };
}

export function updateItem(index, item) {
  return {
    type: UPDATE_ITEM,
    index,
    item
  }
}
