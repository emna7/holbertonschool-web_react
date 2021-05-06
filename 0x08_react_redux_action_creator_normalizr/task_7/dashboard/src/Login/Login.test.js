import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test Login.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Login without crashing', (done) => {
    expect(shallow(<Login />).exists());
    done();
  });

  it('div with the class App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });

  it('renders 2 inputs and 2 labels', (done) => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(3);
    expect(wrapper.find('label')).to.have.lengthOf(2);
    done();
  });

  it('verify that the submit button is disabled by default', (done) => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().enableSubmit).to.equal(false);
    done();
  });

  it('verify that after changing the value of the two inputs, the button is enabled', (done) => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().enableSubmit).to.equal(true);
    done();
  });
});
