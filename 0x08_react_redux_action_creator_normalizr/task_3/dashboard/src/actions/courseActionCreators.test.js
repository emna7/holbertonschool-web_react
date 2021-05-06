import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Test the course action creators", () => {
  it("selectCourse", () => {
    const data = selectCourse(1);
    expect(data).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("unSelectCourse", () => {
    const data = unSelectCourse(1);
    expect(data).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
