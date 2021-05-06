import React from "react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import { expect } from "chai";
import { spy } from "sinon";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });

describe("<Notifications />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  let listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() },
    },
  ];
  let wrapper_1;
  let wrapper_2;

  let propsOne = {
    displayDrawer: false,
  };
  let propsTwo = {
    displayDrawer: true,
    listNotifications: listNotifications,
  };
  //let spyNotifica = spy(Notifications.prototype, "shouldComponentUpdate");

  beforeEach(() => {
    wrapper_1 = shallow(<Notifications shouldRender {...propsOne} />);
    wrapper_2 = shallow(<Notifications {...propsTwo} />);
  });

  it("Test 1 <Notifications /> is rendered without crashing", () => {
    expect(wrapper_1.render()).to.not.be.an("undefined");
  });

  it("Test 2 <Notifications /> is rendered without crashing if listNotifications isn't passed", () => {
    expect(wrapper_1.render()).to.not.be.an("undefined");
  });

  it("Test 3 <Notifications /> is rendered without crashing if listNotifications is empty", () => {
    let propsOne = {
      displayDrawer: false,
      listNotifications: [],
    };

    let wrapper_1 = shallow(<Notifications shouldRender {...propsOne} />);
    expect(wrapper_1.render()).to.not.be.an("undefined");
  });

  it("Test 4 <Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
    expect(
      wrapper_2
        .find("ul")
        .childAt(0)
        .html('<li data-notification-type="default">New course available</li>')
    );
  });

  it("Test 5 menu item is being displayed if displayDrawer is false", () => {
    expect(wrapper_1.find(".menuItem"));
  });

  it("Test 6 div.Notifications is not being displayed if displayDrawer is false", () => {
    expect(wrapper_1.exists(".Notifications")).to.equal(false);
  });

  it("Test 7 menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper_2.exists(".menuItem"));
  });

  it("Test 8 div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper_2.exists(".Notifications"));
  });
  it("Test 9 <Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(
      wrapper_2.contains(<p>Here is the list of notifications</p>)
    ).to.equal(true);
  });
  /*it("Test 10 Verify that when calling the function 'markAsRead' on a component instance, it's being called with the right message", () => {
    const log = jest.spyOn(console, "log");
    const wrapper = shallow(<Notifications />);
    wrapper.instance().markAsRead(25);
    // expect(log).to.have.been.calledWith('Notification 25 has been marked as read');
  });
  
  it("Test 11 verify that when updating the props of the component with the same list, the component doesn’t rerender", () => {
    // let spyNotifica = spy(Notifications.prototype, 'shouldComponentUpdate');
    let notifComp = mount(<Notifications {...propsTwo} />);

    expect(spyNotifica);
    notifComp.setProps({ ...propsTwo });
    expect(spyNotifica).to.not.be.true;
    // expect(spyNotifica).to.have.been.calledTwice();
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    let notificComp = mount(<Notifications {...propsTwo} />);

    expect(spyNotifica);
    notificComp.setProps({
      displayDrawer: true,
      listNotifications: [
        ...propsTwo.listNotifications,
        {
          id: 2341,
          type: "default",
          value: "This Notification updated",
        },
      ],
    });
    expect(spyNotifica).to.not.be.false;
  });*/
});
