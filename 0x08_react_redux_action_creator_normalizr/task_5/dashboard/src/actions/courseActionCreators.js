import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index
  }
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index
  }
};
