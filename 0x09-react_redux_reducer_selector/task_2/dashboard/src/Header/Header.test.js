import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Header from './Header';

import AppContext from '../App/AppContext';

describe('Header', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    expect(wrapper.exists()).toBe(true);
  });

  test('renders an image and h1', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    const image = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect(image.exists()).toBe(true);
    expect(h1.exists()).toBe(true);
  });

  test('logoutSection not created if isLoggedIn is false', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    const logout = wrapper.find('#logoutSection');

    expect(logout.length).toBe(0);
  });

  test('logoutSection created if isLoggedIn is true', () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: 'juno@domain.tld',
            password: 'gecgecgec',
            isLoggedIn: true
          },
          logOut: () => {}
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    const logout = wrapper.find('#logoutSection');

    expect(logout.length).toBe(1);
  });

  test('clicking logout link calls logOut', () => {
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: 'juno@domain.tld',
            password: 'gecgecgec',
            isLoggedIn: true
          },
          logOut
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    const logout = wrapper.find('em');
    expect(logout.length).toBe(1);

    logout.simulate('click');
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});
