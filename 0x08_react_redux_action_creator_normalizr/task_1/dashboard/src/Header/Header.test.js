import Header from "./Header.js";
import React from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

Enzyme.configure({ adapter: new Adapter() });
describe("<Header />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });
  const wrapper = shallow(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
  );
  it("Test 1 renders without crashing", () => {
    shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.exists());
  });
  it("Test 2 img ", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("img").length).toEqual(1);
  });
  it("Test 3 h1", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(
      wrapper.containsMatchingElement(<h1>School dashboard</h1>)
    ).toBeTruthy();
  });
  it("Test 4 logoutSection is created", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("Test 5 logoutSection disappears when the logout function is called", () => {
    let logOutSpy = jest.fn();

    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "test@hotmail.com",
            password: "9876",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
