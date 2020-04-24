import { CREATE_COURSE, DELETE_COURSE, UPDATE_COURSE } from "./actionTypes";

// Action Creators
export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function deleteCourse(index) {
  return {
    type: DELETE_COURSE,
    index
  };
}

// *** WIP

export function updateCourse(index, title) {
  return {
    type: UPDATE_COURSE,
    index,
    title
  }
}
