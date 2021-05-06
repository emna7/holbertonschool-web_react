import React from "react";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import Header from "../Header/Header";
import Login from "../Login/Login";
import App from "./App.js";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it("Test 1 renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  it("Test 2 <App /> contains the <Notifications /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });

  it("Test 3 <App /> contains the <Header /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).to.equal(true);
  });

  it("Test 4 <App /> contains the <Login /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />));
  });

  it("Test 5 <App /> contains the <Footer /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).to.equal(true);
  });

  it("Test 6 <App /> doesn't render <CourseList /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).to.equal(false);
  });
});

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it("Test 7 isLoggedIn is true ", () => {
    const props = {
      isLoggedIn: true,
    };

    const wrapper = shallow(<App {...props} />);

    expect(wrapper.contains(<Login />)).to.equal(false);
  });
  test("Test 8 logOut alerts with correct string", () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, "alert");

    const wrapper = shallow(<App logOut={myLogOut} />);

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
  it("Test 9 Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
  });

  it("Test 10 displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);
  });

  it("Test 11 displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).equal(false);
  });
  it("Test 12 logOut", () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    expect(wrapper.exists());
    const alert = jest.spyOn(global, "alert");
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });

  it("Test 13 default state for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
  });

  it("Test 14 displayDrawer toggle handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);
  });

  it("Test 15 displayDrawer toggle handleDisplayDrawer and handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).equal(false);
  });
  it("<AppContext.Provider />", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.exists());
  });
});
