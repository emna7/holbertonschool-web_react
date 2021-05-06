import React from 'react';
import { shallow } from 'enzyme';
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

    expect(wrapper.exists()).toBe(true);
  });

  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifs = wrapper.find(Notifications);

    expect(notifs.length).toBe(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header.length).toBe(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login.length).toBe(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer.length).toBe(1);
  });

  test('course list not displayed by default', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList.length).toBe(0);
  });

  test('if logged in, course list is displayed and login form is not', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      ...wrapper.state(),
      user: {
        email: 'juno@domain.tld',
        password: 'gecgecgec',
        isLoggedIn: true
      }
    });

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login.length).toBe(0);
    expect(courseList.length).toBe(1);
  });

  test('logout keyboard shortcut works', () => {
    const map = {};
    window.addEventListener = jest.fn((ev, cb) => {
      map[ev] = cb;
    });

    window.alert = jest.fn();

    const wrapper = shallow(<App />);
    wrapper.setState({
      ...wrapper.state(),
      user: {
        email: 'juno@domain.tld',
        password: 'gecgecgec',
        isLoggedIn: true
      }
    });

    expect(wrapper.state().user).toHaveProperty('email', 'juno@domain.tld');
    expect(wrapper.state().user).toHaveProperty('password', 'gecgecgec');
    expect(wrapper.state().user).toHaveProperty('isLoggedIn', true);

    map.keydown({ key: 'Control' });
    map.keydown({ key: 'h' });

    expect(wrapper.state().user).toHaveProperty('email', '');
    expect(wrapper.state().user).toHaveProperty('password', '');
    expect(wrapper.state().user).toHaveProperty('isLoggedIn', false);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  describe('correctly handles displayDrawer state', () => {
    test('defaults to false', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state()).toHaveProperty('displayDrawer', false);
    });

    test('handleDisplayDrawer and handleHideDrawer work as expected', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state()).toHaveProperty('displayDrawer', true);

      wrapper.instance().handleHideDrawer();
      expect(wrapper.state()).toHaveProperty('displayDrawer', false);
    });
  });

  describe('login/logout work as expected', () => {
    test('login correctly sets state', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state().user).toHaveProperty('email', '');
      expect(wrapper.state().user).toHaveProperty('password', '');
      expect(wrapper.state().user).toHaveProperty('isLoggedIn', false);

      wrapper.instance().logIn('juno@domain.tld', 'gecgecgec');

      expect(wrapper.state().user).toHaveProperty('email', 'juno@domain.tld');
      expect(wrapper.state().user).toHaveProperty('password', 'gecgecgec');
      expect(wrapper.state().user).toHaveProperty('isLoggedIn', true);
    });

    test('logout correctly sets state', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        ...wrapper.state(),
        user: {
          email: 'juno@domain.tld',
          password: 'gecgecgec',
          isLoggedIn: true
        }
      });

      expect(wrapper.state().user).toHaveProperty('email', 'juno@domain.tld');
      expect(wrapper.state().user).toHaveProperty('password', 'gecgecgec');
      expect(wrapper.state().user).toHaveProperty('isLoggedIn', true);

      wrapper.state().logOut();

      expect(wrapper.state().user).toHaveProperty('email', '');
      expect(wrapper.state().user).toHaveProperty('password', '');
      expect(wrapper.state().user).toHaveProperty('isLoggedIn', false);
    });
  });

  test('markNotificationAsRead works as expected', () => {
    const testNotifs = [
      { id: 1, type: 'default', value: 'test' },
      { id: 2, type: 'urgent', value: 'test' }
    ];

    const wrapper = shallow(<App />);
    wrapper.setState({ ...wrapper.state(), listNotifications: testNotifs });

    expect(wrapper.state().listNotifications.length).toBe(2);

    wrapper.instance().markNotificationAsRead(1);

    expect(wrapper.state().listNotifications.length).toBe(1);
    expect(wrapper.state().listNotifications[0]).toHaveProperty('id', 2);
  });
});
