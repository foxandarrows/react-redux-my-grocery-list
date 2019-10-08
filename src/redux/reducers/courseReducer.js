import { CREATE_COURSE, DELETE_COURSE } from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case DELETE_COURSE:
      // let newArr = [
      //   ...state.filter((elem, idx) => {
      //     return idx !== action.index;
      //   })
      // ];
      // return newArr;
      return state.filter(item => item.id !== action.index);
    default:
      return state;
  }
}
