import { Map } from 'immutable';

import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

import coursesNormalizer from '../schema/courses';

const initialState = Map({
  courses: []
});

const courseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      action.data = coursesNormalizer(
        action.data.map((course) => ({
          ...course,
          isSelected: false
        }))
      );
      return state.setIn(['courses'], action.data);
    case SELECT_COURSE:
      return state.setIn(
        [
          'courses',
          'entities',
          'courses',
          action.index.toString(),
          'isSelected'
        ],
        true
      );
    case UNSELECT_COURSE:
      return state.setIn(
        [
          'courses',
          'entities',
          'courses',
          action.index.toString(),
          'isSelected'
        ],
        false
      );
    default:
      return state;
  }
};

export default courseReducer;
