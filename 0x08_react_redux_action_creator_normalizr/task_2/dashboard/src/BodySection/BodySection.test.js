import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import BodySection from "./BodySection.js";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

describe("<BodySection /> Component", () => {
  it("Test 1 Renders the correct children", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(
      wrapper.containsAllMatchingElements([
        <h2>test title</h2>,
        <p>test children node</p>,
      ])
    ).to.equal(true);
  });
});
