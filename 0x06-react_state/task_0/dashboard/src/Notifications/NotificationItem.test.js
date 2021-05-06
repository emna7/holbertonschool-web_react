import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test NotificationItem.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Notificacionitem without crashing', (done) => {
    expectChai(shallow(<NotificationItem id={1}/>).exists());
    done();
  });

  it('renders three list items', (done) => {
    const wrapper = shallow(<NotificationItem type='default' value='test' id={1} />);
    
    expectChai(wrapper.find('li')).to.have.lengthOf(1);
    expectChai(wrapper.find('li').props()).to.have.property('data-notification-type', 'default');
    expectChai(wrapper.find('li').text()).to.equal('test');
    done();
  });

  it('renders inner HTML', (done) => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} />);
    expectChai(wrapper.find('li').hasClass(/default*/)).to.equal(true);
    //expectChai(wrapper.html()).to.equal(`<li data-notification-type="default" class="default_"><u>test</u></li>`);
    done();
  });

  it('spy as the markAsRead property and Check that when simulating a click on the component, the spy is called with the right ID argument', (done) => {
    const wrapper = shallow(<NotificationItem type='default' value='test' id={1} />);
    const markAsRead = wrapper.instance().markAsRead = jest.fn();
    wrapper.find('li').first().simulate('click');
    markAsRead(1);
    expect(markAsRead).toHaveBeenCalled();
    expect(markAsRead).toHaveBeenCalledWith(1);
    done();
  });
});

