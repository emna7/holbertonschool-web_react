import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as expectChai } from 'chai';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test WithLogging.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', (done) => {
    const WrapElement = WithLogging(() => <a></a>);
    console.log = jest.fn();
    const wrapper = mount(<WrapElement />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    done();
  });

  it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. ', (done) => {
    const WrapElement = WithLogging(Login);
    console.log = jest.fn();
    const wrapper = mount(<WrapElement />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    done();
  });
});
