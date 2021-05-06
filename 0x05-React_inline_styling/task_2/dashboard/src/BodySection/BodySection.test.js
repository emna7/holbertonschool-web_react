import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";


describe('Test BodySection.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Render without crashing', (done) => {
    expectChai(shallow(<BodySection title='test' />).exists());
    done();
  });

  it('render "h2" with text "test title" and "p" with text "test children node"', (done) => {
    const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    expectChai(wrapper.find('h2')).to.have.lengthOf(1);
    expectChai(wrapper.find('h2').text()).to.equal('test title');
    expectChai(wrapper.find('p')).to.have.lengthOf(1);
    expectChai(wrapper.find('p').text()).to.equal('test children node');
    done();
  });
});
