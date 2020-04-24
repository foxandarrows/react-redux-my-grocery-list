import { CREATE_COURSE, DELETE_COURSE, UPDATE_COURSE } from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case DELETE_COURSE:
      return state.filter(course => course.id !== action.index);
    case UPDATE_COURSE:
      return state.map((course) => course.id === action.index ? { ...course, editing: !course.editing, title: course.title, } : course )
    default:
      return state;
  }
}
