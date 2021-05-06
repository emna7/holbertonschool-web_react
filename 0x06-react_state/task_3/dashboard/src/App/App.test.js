import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test App.js', () => {
	let events = {};

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    events = {}; // Empty our events before each test case
    // Define the addEventListener method with a Jest mock function
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });


  it('App without crashing', (done) => {
    expectChai(shallow(<App />).exists());
    done();
  });

  it('check that CourseList is not displayed when isLoggedIn is false', (done) => {
    const wrapper = shallow(<App />);
    expectChai(wrapper.find(CourseList)).to.have.lengthOf(0);
    done();
  });

  it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', (done) => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expectChai(wrapper.find(CourseList)).to.have.lengthOf(1);
    expectChai(wrapper.find(Login)).to.have.lengthOf(0);
    done();
  });

  it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', (done) => {
    const logOut = jest.fn(() => void (0));
    shallow(<App />);
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logOut).toHaveBeenCalled()
    done();
  });

  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('Refactor the test checking if logOut is being called by verifying if the state is updated correctly instead', (done) => {
    const wrapper = mount(<AppContext.Provider value={value}><App/></AppContext.Provider>);
    wrapper.instance().logOut;
    expectChai(wrapper.state().user).to.equals(value.user);
    done();
  });

  it('test to verify that the logIn function updates the state correctly', (done) => {
    const wrapper = mount(<AppContext.Provider value={value}><App/></AppContext.Provider>);
    wrapper.instance().logIn('test@test.com', 'test');
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    expectChai(wrapper.state().user.email).to.equals(value.user.email);
    expectChai(wrapper.state().user.password).to.equals(value.user.password);
    expectChai(wrapper.state().user.isLoggedIn).to.equals(value.user.isLoggedIn);
    done();
  });

  it('test to verify that the logOut function updates the state correctly', (done) => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    const wrapper = mount(<AppContext.Provider value={value}><App/></AppContext.Provider>);
    wrapper.instance().logOut();
    expectChai(wrapper.state().user).to.equals(user);
    done();
  });

  it('verify that markNotificationAsRead works as intended.', (done) => {
    const wrapper = mount(<AppContext.Provider value={value}><App/></AppContext.Provider>);
    wrapper.setState({ listNotifications: listNotifications });
    expectChai(wrapper.state().listNotifications.length).to.equals(3);
    wrapper.instance().markNotificationAsRead(1);
    expectChai(wrapper.state().listNotifications.length).to.equals(2);
    done();
  });
});

