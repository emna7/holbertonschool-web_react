import CourseList from "./CourseList";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Enzyme from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });

describe("Testing the <CourseList /> Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it("Test if <CourseList /> is rendered without crashing", () => {
    let component = shallow(<CourseList shouldRender />);

    expect(component.render()).to.not.be.an("undefined");
  });

  it("Test tthat when you pass a list of courses, the component renders it correctly", () => {
    let props = {
      listCourses: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    };

    let component = shallow(<CourseList shouldRender {...props} />);
    expect(component.render()).to.not.be.an("undefined");
  });
});
