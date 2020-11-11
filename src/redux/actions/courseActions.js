import { CREATE_COURSE, DELETE_COURSE, EDIT_COURSE, UPDATE_COURSE } from "./actionTypes";

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

export function editCourse(index, editing) {
  console.log('editCourse index', index);
  return {
    type: EDIT_COURSE,
    index,
    editing
  };
}

// *** WIP

export function updateCourse(index, course) {
  console.log('updateCourse index', index);
  return {
    type: UPDATE_COURSE,
    index,
    course
  }
}
