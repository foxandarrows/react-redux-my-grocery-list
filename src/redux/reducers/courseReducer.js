import { CREATE_COURSE, DELETE_COURSE, EDIT_COURSE, UPDATE_COURSE } from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case DELETE_COURSE:
      return state.filter(course => course.id !== action.index);
    case EDIT_COURSE:
      return state.map((course) => course.id === action.index ? { ...course, editing: !course.editing } : course )
    case UPDATE_COURSE:
      return state.map((course)=>{
        if(course.id === action.index) {
          return [ ...state, {
            title: course.title,
            editing: course.editing
          }]
        } else return course;
      })
    default:
      return state;
  }
}
