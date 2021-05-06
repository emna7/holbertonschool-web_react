import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { expect as expectChai } from 'chai';
import { courseReducer } from './courseReducer';
import { coursesNormalizer } from '../schema/courses';

var _ = require('lodash');
const { Map, fromJS } = require('immutable');

describe('Test courseReducer.js', () => {
  const state = fromJS(coursesNormalizer([
    { id: 1, name: "ES6", isSelected: false, credit: 60 },
    { id: 2, name: "Webpack", isSelected: false, credit: 20 },
    { id: 3, name: "React", isSelected: false, credit: 40 }
  ]));
  const data = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];
  
  it('Test that the default state returns an empty array', (done) => {
    const result = courseReducer(undefined, { });
    expectChai(_.isEqual(result, Map([]))).to.equal(true);
    done();
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', (done) => {
    const result = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: data });
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
    expectChai(_.isEqual(result.toJS(), expected)).to.equal(true);
    done();
  });

  it('Test that SELECT_COURSE returns the data with the right item updated', (done) => {
    const result = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
    expectChai(_.isEqual(result.toJS(), expected)).to.equal(true);
    done();
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', (done) => {
    const result = courseReducer(courseReducer(state, { type: SELECT_COURSE, index: 2 }), { type: UNSELECT_COURSE, index: 2 });
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
    expectChai(_.isEqual(result.toJS(), expected)).to.equal(true);
    done();
  });
});
