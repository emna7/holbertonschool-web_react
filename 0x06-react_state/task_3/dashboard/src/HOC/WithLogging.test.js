import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import WithLogging from "./WithLogging.js";
import Login from "../Login/Login.js";
import { StyleSheetTestUtils } from "aphrodite";

configure({
  adapter: new Adapter(),
});

describe("WithLogging.js", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });
  it("Test 1 console.log was called on mount and on unmount with Component when the wrapped element is pure html", (done) => {
    const WithLoggingWrapper = WithLogging(() => <a></a>);
    console.log = jest.fn();
    const wrapper = mount(<WithLoggingWrapper />);

    expect(console.log).toHaveBeenCalledWith("Component Component is mounted");
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
    done();
  });

  it("Test 2 console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. ", (done) => {
    const WithLoggingWrapper = WithLogging(Login);
    console.log = jest.fn();
    const wrapper = mount(<WithLoggingWrapper />);

    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
    done();
  });
});
