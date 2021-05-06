import courseReducer from './courseReducer';

import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = {
    courses: []
  };

  const courses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20
    },
    {
      id: 3,
      name: 'React',
      credit: 40
    }
  ];

  test('default state returns empty array', () => {
    const state = courseReducer();

    expect(state).toEqual(initialState);
  });

  test('state changes as expected when FETCH_COURSE_SUCCESS is passed', () => {
    const state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    });

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Array]'
    );

    // Check each individual object
    expect(state.courses[0]).toEqual({ ...courses[0], isSelected: false });
    expect(state.courses[1]).toEqual({ ...courses[1], isSelected: false });
    expect(state.courses[2]).toEqual({ ...courses[2], isSelected: false });
  });

  test('state changes as expected when SELECT_COURSE is passed', () => {
    const index = 2;

    // Get courses
    let state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    });

    // Select course
    state = courseReducer(state, { type: SELECT_COURSE, index });

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Array]'
    );

    // Expect only course with id of 2 to be selected
    expect(state.courses[0]).toEqual({ ...courses[0], isSelected: false });
    expect(state.courses[1]).toEqual({ ...courses[1], isSelected: true });
    expect(state.courses[2]).toEqual({ ...courses[2], isSelected: false });
  });

  test('state changes as expected when UNSELECT_COURSE is passed', () => {
    const index = 4;
    const selectedCourse = {
      id: 4,
      name: 'GraphQL',
      isSelected: true,
      credit: 40
    };

    // Get courses
    let state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    });

    // Unselect course
    state = courseReducer(
      {
        ...state,
        courses: [
          ...state.courses,
          { id: 4, name: 'GraphQL', isSelected: true, credit: 40 }
        ]
      },
      { type: UNSELECT_COURSE, index }
    );

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Array]'
    );

    // Expect course with id of 2 to be unselected again
    expect(state.courses[0]).toEqual({ ...courses[0], isSelected: false });
    expect(state.courses[1]).toEqual({ ...courses[1], isSelected: false });
    expect(state.courses[2]).toEqual({ ...courses[2], isSelected: false });
    expect(state.courses[3]).toEqual({ ...selectedCourse, isSelected: false });
  });
});
