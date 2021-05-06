import CourseListRow from "./CourseListRow";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Enzyme from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });

describe("<CourseListRow />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Test 1 renders one cell with colSpan=2 if textSecondCell doesn't exist and isHeader is true", () => {
    const props = {
      isHeader: true,
      textFirstCell: "dumbstring",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.containsAllMatchingElements([
        <th colSpan={2}>{props.textFirstCell}</th>,
      ])
    ).to.equal(true);
  });

  it("Test 2 renders 2 cells 2 textSecondCell exists and isHeader is true", () => {
    const props = {
      isHeader: true,
      textFirstCell: "dumbstring",
      textSecondCell: "dumbstring",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.containsAllMatchingElements([
        <th>{props.textFirstCell}</th>,
        <th>{props.textSecondCell}</th>,
      ])
    ).to.equal(true);
  });

  it("Test 3 renders 2 <td> within a <tr> element when isHeader is false", () => {
    const props = {
      isHeader: false,
      textFirstCell: "dumbstring",
      textSecondCell: "dumbstring",
    };

    const wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.containsAllMatchingElements([
        <td>{props.textFirstCell}</td>,
        <td>{props.textSecondCell}</td>,
      ])
    ).to.equal(true);
  });
});
