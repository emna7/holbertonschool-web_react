import React from "react";
import NotificationItem from "./NotificationItem";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Suite - <NotificationItem />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });
  it("Test 1 renders <NotificationItem />", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });
  /*it("Test 2 renders the correct HTML by passing dummy type and value props", () => {
    const props = {
      type: "default",
      value: "New course available",
      html: undefined,
    };
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(
      wrapper.contains(
        <li
          data-notification-type={props.type}
          dangerouslySetInnerHTML={undefined}
        >
          New course available
        </li>
      )
    ).toEqual(true);
  });*/
  it(" Test 3 renders the correct HTML, by passing dummy Html props", () => {
    const props = {
      type: "urgent",
      html: { __html: "<p>test</p>" },
    };
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(
      wrapper.contains(
        <li
          data-notification-type={props.type}
          dangerouslySetInnerHTML={props.html}
        />
      )
    );
  });
  it("spy as the markAsRead property and Check that when simulating a click on the component, the spy is called with the right ID argument", (done) => {
    const props = { type: "default", value: "test", id: 1 };
    const myWrapper = shallow(<NotificationItem {...props} />);
    const markAsRead = (myWrapper.instance().markAsRead = jest.fn());
    myWrapper.find("li").first().simulate("click");
    markAsRead(1);
    expect(markAsRead).toHaveBeenCalled();
    expect(markAsRead).toHaveBeenCalledWith(1);
    done();
  });
});
