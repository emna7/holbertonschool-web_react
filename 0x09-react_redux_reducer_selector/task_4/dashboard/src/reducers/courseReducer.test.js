import { Map } from 'immutable';

import courseReducer from './courseReducer';

import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = Map({
    courses: []
  });

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
    const state = courseReducer(initialState);

    expect(state).toEqual(initialState);
  });

  test('state changes as expected when FETCH_COURSE_SUCCESS is passed', () => {
    const state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    }).toJS();

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Object]'
    );

    const stateCourses = state.courses.entities.courses;

    // Check each individual object
    expect(stateCourses[1]).toEqual({ ...courses[0], isSelected: false });
    expect(stateCourses[2]).toEqual({ ...courses[1], isSelected: false });
    expect(stateCourses[3]).toEqual({ ...courses[2], isSelected: false });
  });

  test('state changes as expected when SELECT_COURSE is passed', () => {
    const index = 2;

    // Get courses
    let state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    });

    // Select course
    state = courseReducer(state, { type: SELECT_COURSE, index }).toJS();

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Object]'
    );

    const stateCourses = state.courses.entities.courses;

    // Expect only course with id of 2 to be selected
    expect(stateCourses[1]).toEqual({ ...courses[0], isSelected: false });
    expect(stateCourses[2]).toEqual({ ...courses[1], isSelected: true });
    expect(stateCourses[3]).toEqual({ ...courses[2], isSelected: false });
  });

  test('state changes as expected when UNSELECT_COURSE is passed', () => {
    const index = 3;

    // Get courses
    let state = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    });

    // Select course
    state = courseReducer(state, { type: SELECT_COURSE, index }).toJS();

    let stateCourses = state.courses.entities.courses;

    expect(stateCourses[3]).toEqual({ ...courses[2], isSelected: true });

    state = Map(state);

    // Unselect course
    state = courseReducer(state, { type: UNSELECT_COURSE, index }).toJS();

    expect(Object.keys(state).length).toBe(1);
    expect(state).toHaveProperty('courses');
    expect(Object.prototype.toString.call(state.courses)).toBe(
      '[object Object]'
    );

    stateCourses = state.courses.entities.courses;

    // Expect course with id of 3 to be unselected again
    expect(stateCourses[1]).toEqual({ ...courses[0], isSelected: false });
    expect(stateCourses[2]).toEqual({ ...courses[1], isSelected: false });
    expect(stateCourses[3]).toEqual({ ...courses[2], isSelected: false });
  });
});
