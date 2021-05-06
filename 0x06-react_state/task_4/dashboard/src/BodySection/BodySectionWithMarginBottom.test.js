import React from "react";
import { expect } from "chai";
import { shallow, configure, mount } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom.js";
import BodySection from "./BodySection.js";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";

configure({
  adapter: new Adapter(),
});

describe("Testing component <BodySectionWithMarginBottom/>", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  test("Test 1 renders the 'BodySection' Component correctly with children", () => {
    const wrapper = mount(
      <BodySectionWithMarginBottom title="Title">
        <p>paragraph 1</p>
        <p>paragraph 2</p>
      </BodySectionWithMarginBottom>
    );
    const BDComponent = wrapper.find(BodySection);
    const h2 = BDComponent.find("h2");
    const paragh = BDComponent.find("p");
    expect(h2).to.have.lengthOf(1);
    expect(h2.text()).to.equal("Title");
    expect(paragh).to.have.lengthOf(2);
    expect(paragh.at(0).text()).to.equal("paragraph 1");
    expect(paragh.at(1).text()).to.equal("paragraph 2");
  });

  test("Test 2 render with correct style", () => {
    const wrapper1 = mount(<BodySectionWithMarginBottom />);
    const wrapper2 = wrapper1.find(".bodySectionWithMargin");
    expect(wrapper2.exists());
  });
});
