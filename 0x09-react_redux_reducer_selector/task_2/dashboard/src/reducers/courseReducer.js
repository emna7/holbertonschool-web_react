import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = {
  courses: []
};

const courseReducer = (state = initialState, action = {}) => {
  let courses;

  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      courses = action.data.map((course) => {
        course.isSelected = false;
        return course;
      });

      return { ...state, courses };
    case SELECT_COURSE:
      courses = state.courses.map((course) => {
        if (course.id === action.index) course.isSelected = true;
        return course;
      });

      return { ...state, courses };
    case UNSELECT_COURSE:
      courses = state.courses.map((course) => {
        if (course.id === action.index) course.isSelected = false;
        return course;
      });

      return { ...state, courses };
    default:
      return state;
  }
};

export default courseReducer;
