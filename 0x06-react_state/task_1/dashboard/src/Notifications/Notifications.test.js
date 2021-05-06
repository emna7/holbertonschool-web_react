import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test Notification.js', () => {
  let listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  const listNotificationsUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} },
    { id: 4, type: 'default', value: 'New updates' },
  ];

  const listNotificationsNoUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Notification without crashing', (done) => {
    expectChai(shallow(<Notifications />).exists());
    done();
  });

  it('renders three list items', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expectChai(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    done();
  });

  it('renders the right html', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expectChai(wrapper.find(NotificationItem).first().props().type).to.equal('default');
    expectChai(wrapper.find(NotificationItem).first().html()).to.match(/<li data-notification-type="default" class="default_*/);
    done();
  });

  it('menu item is being displayed when displayDrawer is false', (done) => {
    const wrapper = shallow(<Notifications />);
    expectChai(wrapper.find('div#menuItem')).to.have.lengthOf(1);
    done();
  });

  it('Add a check that the div.Notifications is not being displayed when displayDrawer is false', (done) => {
    const wrapper = shallow(<Notifications />);
    expectChai(wrapper.find('div#notifications')).to.have.lengthOf(0);
    done();
  });

  it('Add a check that the menu item is being displayed when displayDrawer is true', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find('div#notifications')).to.have.lengthOf(1);
    done();
  });

  it('Add a check that the div.Notifications is being displayed when displayDrawer is true', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expectChai(wrapper.find('div#notifications')).to.have.lengthOf(1);
    done();
  });

  it('Verify that renders correctly if you pass an empty array or if don’t pass the listNotifications', (done) => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expectChai(wrapper.find(NotificationItem)).to.have.lengthOf(1);
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find(NotificationItem)).to.have.lengthOf(1);
    done();
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expectChai(wrapper.find(NotificationItem));
    expectChai(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    done();
  });

  it('Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find(NotificationItem).first().html()).to.match(/<li data-notification-type="no-new" class="default*/);
    done();
  });

  it('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled()
    done();    
  });

  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    done();    
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    done();    
  });

  it('verify that clicking on the menu item calls handleDisplayDrawer', (done) => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("#menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
    done();
  });

  it('verify that clicking on the button calls handleHideDrawer', (done) => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("#closeMenuItem").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
    done();
  });
});

