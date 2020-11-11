import { CREATE_COURSE, DELETE_COURSE, EDIT_COURSE, UPDATE_COURSE } from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case DELETE_COURSE:
      return state.filter(course => course.id !== action.index);
    case EDIT_COURSE:
      return state.map(course => course.id === action.index ? { ...course, editing: !course.editing } : course )
    case UPDATE_COURSE:
      return state.map((s) => {
        console.log('UPDATE_COURSE', action.index);
        if(s.id === action.index) {
          return { ...s,
            title: action.course.title,
            editing: false
          }
        } else return s;
      })
    default:
      return state;
  }
}
