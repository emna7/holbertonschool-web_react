import React, { Component } from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WithLogging from './WithLogging';
import Login from '../Login/Login';


configure({
	adapter: new Adapter()
});

describe('WithLogging', () => {
  test('console.log called on mount', () => {
    console.log = jest.fn();

    const TestWithLogging = WithLogging(() => <p />);
    const wrapper = mount(<TestWithLogging />);

    expect(console.log).toHaveBeenCalledWith(`Component Component is mounted`);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      `Component Component is going to unmount`
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('correctly logs component name', () => {
    console.log = jest.fn();

    const LoginWithLogging = WithLogging(Login);
    const wrapper = mount(<LoginWithLogging />);

    expect(console.log).toHaveBeenCalledWith(`Component Login is mounted`);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      `Component Login is going to unmount`
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
