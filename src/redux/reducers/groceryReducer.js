import { CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from "../actions/actionTypes";

export default function groceryReducer(state = [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, { ...action.item }];
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.index);
    case EDIT_ITEM:
      return state.map(item => item.id === action.index ? { ...item, editing: !item.editing } : item )
    case UPDATE_ITEM:
      return state.map((item) => {
        if(item.id === action.index) {
          return { ...item,
            title: action.item.title,
            editing: false
          }
        } else return item;
      })
    default:
      return state;
  }
}
