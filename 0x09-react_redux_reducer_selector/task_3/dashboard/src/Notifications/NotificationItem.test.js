import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={0} />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders with correct type and value', () => {
    const wrapper = shallow(
      <NotificationItem id={0} type='default' value='test' />
    );
    const li = wrapper.find('li');

    expect(li.props()).toHaveProperty('data-notification-type', 'default');
    expect(li.text()).toBe('test');
  });

  test('renders with correct inner html', () => {
    const wrapper = shallow(
      <NotificationItem id={0} type='urgent' html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');

    expect(li.props()).toHaveProperty('dangerouslySetInnerHTML', {
      __html: '<u>test</u>'
    });
  });

  test('markAsRead is called on click', () => {
    const spy = jest.fn();

    const wrapper = shallow(
      <NotificationItem key={0} id={0} markAsRead={spy} />
    );
    wrapper.simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0);
  });
});
