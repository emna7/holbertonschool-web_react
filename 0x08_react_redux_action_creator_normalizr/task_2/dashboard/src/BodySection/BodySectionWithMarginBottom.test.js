import React from 'react';
import { shallow, mount } from 'enzyme';
import '@testing-library/react';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';

import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('should properly render children', () => {
    const wrapper = mount(
      <BodySectionWithMarginBottom title='heading'>
        <p>paragraph 0</p>
        <p>paragraph 1</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    const heading = bodySection.find('h2');
    const p = bodySection.find('p');

    expect(heading.length).toBe(1);
    expect(heading.text()).toBe('heading');

    expect(p.length).toBe(2);
    expect(p.at(0).text()).toBe('paragraph 0');
    expect(p.at(1).text()).toBe('paragraph 1');
  });

  test('should have correct style applied', () => {
    const wrapper = mount(<BodySectionWithMarginBottom />);
    const div = wrapper.find('div');

    expect(div.at(0).debug().includes('className="margin_')).toBe(true);
  });
});
