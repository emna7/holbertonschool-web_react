import Login from "./Login.js";
import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";

Enzyme.configure({ adapter: new Adapter() });
describe("<Login />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it("Test 1 <Login /> renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
    // or : expect(wrapper.render()).to.not.be.an('undefined');
  });

  it("Test 3 <Login /> render 2 labels", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).to.have.lengthOf(2);
  });
  it("Test 4 component renders 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).equal(2);
    expect(wrapper.find("input").length).equal(3);
  });
  it("Test 5 submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const sub = wrapper.find("form input[type='submit']");

    expect(sub.prop("disabled")).equal(true);
  });
});
