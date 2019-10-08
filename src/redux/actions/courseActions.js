import { CREATE_COURSE, DELETE_COURSE } from "./actionTypes";

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
