import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Footer from './Footer';

import AppContext from '../App/AppContext';

describe('Footer', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  test('copy text contains at least "Copyright"', () => {
    const wrapper = mount(<Footer />);
    const p = wrapper.find('p');

    const re = /Copyright/;

    expect(re.test(wrapper.text())).toBe(true);
  });

  test('contact link not shown if user is not logged in', () => {
    const wrapper = shallow(<Footer />);
    const contact = wrapper.find('[data-testid="contact"]');

    expect(contact.length).toBe(0);
  });

  test('contact link shown if user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );

    const contact = wrapper.find('[data-testid="contact"]');

    expect(contact.length).toBe(1);
  });
});
