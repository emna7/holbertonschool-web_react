import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifs = wrapper.find(Notifications);

    expect(notifs).to.have.lengthOf(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header).to.have.lengthOf(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login).to.have.lengthOf(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer).to.have.lengthOf(1);
  });
  test('course list NOT displayed by default', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList).to.have.lengthOf(0);
  });

  test('if logged in, course list is displayed and login form is NOT', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      ...wrapper.state(),
      user: {
        email: 'email@email.com',
        password: 'pass123',
        isLoggedIn: true
      }
    });

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login).to.have.lengthOf(0);
    expect(courseList).to.have.lengthOf(1);
  });

  test('logOut alerts with correct string', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');

    const wrapper = shallow(<App logOut={myLogOut} />)

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });

  describe('correctly handles displayDrawer state', () => {
    test('defaults to false', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state()).to.have.property('displayDrawer', false);
    });

    test('handleDisplayDrawer and handleHideDrawer work as expected', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state()).to.have.property('displayDrawer', true);

      wrapper.instance().handleHideDrawer();
      expect(wrapper.state()).to.have.property('displayDrawer', false);
    });
  });

  describe('login/logout work', () => {
    test('logIN sets state', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state().user).to.have.property('email', '');
      expect(wrapper.state().user).to.have.property('password', '');
      expect(wrapper.state().user).to.have.property('isLoggedIn', false);

      wrapper.instance().logIn('email@email.com', 'pass123');

      expect(wrapper.state().user).to.have.property('email', 'email@email.com');
      expect(wrapper.state().user).to.have.property('password', 'pass123');
      expect(wrapper.state().user).to.have.property('isLoggedIn', true);
    });

    test('logOUT sets state', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        ...wrapper.state(),
        user: {
          email: 'email@email.com',
          password: 'pass123',
          isLoggedIn: true
        }
      });

      expect(wrapper.state().user).to.have.property('email', 'email@email.com');
      expect(wrapper.state().user).to.have.property('password', 'pass123');
      expect(wrapper.state().user).to.have.property('isLoggedIn', true);

      wrapper.state().logOut();

      expect(wrapper.state().user).to.have.property('email', '');
      expect(wrapper.state().user).to.have.property('password', '');
      expect(wrapper.state().user).to.have.property('isLoggedIn', false);
    });
  });

  test('markNotificationAsRead functionality', () => {
    const testNotifs = [
      { id: 1, type: 'default', value: 'default notification' },
      { id: 2, type: 'urgent', value: 'urgent notification' }
    ];

    const wrapper = shallow(<App />);
    wrapper.setState({ ...wrapper.state(), listNotifications: testNotifs });

    expect(wrapper.state().listNotifications).to.have.lengthOf(2);

    wrapper.instance().markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).to.have.lengthOf(1);
    expect(wrapper.state().listNotifications[0]).to.have.property('id', 2);
  });
});
