import React from 'react';
import { shallow } from 'enzyme';

import BodySection from './BodySection';

describe('BodySection', () => {
  test('should properly render children', () => {
    const wrapper = shallow(
      <BodySection title='heading'>
        <p>paragraph 0</p>
        <p>paragraph 1</p>
      </BodySection>
    );
    const heading = wrapper.find('h2');
    const p = wrapper.find('p');

    expect(heading.length).toBe(1);
    expect(heading.text()).toBe('heading');

    expect(p.length).toBe(2);
    expect(p.at(0).text()).toBe('paragraph 0');
    expect(p.at(1).text()).toBe('paragraph 1');
  });
});
