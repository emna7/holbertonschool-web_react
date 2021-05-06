import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { expect as expectChai } from 'chai';

var _ = require('lodash');

describe('Test courseActionCreators.js', () => {
  it('test for the selectCourse action. Calling the creator with 1 as argument should return: "{ type: SELECT_COURSE, index: 1 }"' , (done) => {
    const data = selectCourse(1);
    const result = { type: SELECT_COURSE, index: 1 };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for the unSelectCourse action. Calling the creator with 1 as argument should return: "{ type: UNSELECT_COURSE, index: 1 }"', (done) => {
    const data = unSelectCourse(1);
    const result = { type: UNSELECT_COURSE, index: 1 };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });
});
