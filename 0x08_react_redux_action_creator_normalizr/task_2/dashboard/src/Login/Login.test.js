import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Login from './Login';

describe('Login', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders three input tags', () => {
    const wrapper = shallow(<Login />);

    const inputs = wrapper.find('input');
    const labels = wrapper.find('label');

    expect(inputs.length).toBe(3);
    expect(labels.length).toBe(2);
  });

  test('submit is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submit = wrapper.find('[data-testid="submit"]');

    expect(submit.length).toBe(1);
    expect(submit.props()).toHaveProperty('disabled', true);
  });

  test('submit is enabled when inputs are not empty', () => {
    const wrapper = shallow(<Login />);
    const email = wrapper.find('input#email');
    const password = wrapper.find('input#password');
    let submit = wrapper.find('[data-testid="submit"]');

    expect(email.length).toBe(1);
    expect(password.length).toBe(1);
    expect(submit.length).toBe(1);

    expect(wrapper.state()).toHaveProperty('enableSubmit', false);
    expect(submit.props()).toHaveProperty('disabled', true);

    email.simulate('change', { target: { value: 'juno@domain.tld' } });
    expect(wrapper.state()).toHaveProperty('enableSubmit', false);
    submit = wrapper.find('[data-testid="submit"]');
    expect(submit.props()).toHaveProperty('disabled', true);

    password.simulate('change', { target: { value: 'dime' } });
    expect(wrapper.state()).toHaveProperty('enableSubmit', true);
    submit = wrapper.find('[data-testid="submit"]');
    expect(submit.props()).toHaveProperty('disabled', false);
  });
});
