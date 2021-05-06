import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const logSpy = jest.fn();
    const wrapper = shallow(<App logOut={logSpy} />);
    window.alert = jest.fn();
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logSpy).toHaveBeenCalled()
    done();
  });

  it('verify that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('verify that after calling handleDisplayDrawer, the state should now be true', (done) => {
    const wrapper = shallow(<App/>);
    expectChai(wrapper.state().displayDrawer).to.equal(false);
    wrapper.instance().handleDisplayDrawer();
    expectChai(wrapper.state().displayDrawer).to.equal(true);
    done();
  });

  it('verify that after calling handleHideDrawer, the state is updated to be false', (done) => {
    const wrapper = shallow(<App/>);
    expectChai(wrapper.state().displayDrawer).to.equal(false);
    wrapper.instance().handleDisplayDrawer();
    expectChai(wrapper.state().displayDrawer).to.equal(true);
    wrapper.instance().handleHideDrawer();
    expectChai(wrapper.state().displayDrawer).to.equal(false);
    done();
  });
});

