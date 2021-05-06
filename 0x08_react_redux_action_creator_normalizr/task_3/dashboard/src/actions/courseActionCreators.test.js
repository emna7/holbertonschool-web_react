import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('action creators return expected values', () => {
  test('selectCourse', () => {
    // Call with index of 1
    const ret = selectCourse(1);

    // Make sure returned object has correct properties
    expect(ret).toHaveProperty('type', SELECT_COURSE);
    expect(ret).toHaveProperty('index', 1);
  });

  test('unSelectCourse', () => {
    // Call with index of 1
    const ret = unSelectCourse(1);

    // Make sure returned object has correct properties
    expect(ret).toHaveProperty('type', UNSELECT_COURSE);
    expect(ret).toHaveProperty('index', 1);
  });
});
