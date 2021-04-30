import React from 'react';
import { expect as expect2 } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Notifications from './Notifications'
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect2(wrapper.exists());
  });

  describe('displayDrawer is true', () => {
    test('has a close button', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
  
      expect2(wrapper.find('img')).to.have.lengthOf(1);
    });
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect2(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const notifs = wrapper.find('[data-testid="notifs"]');

      expect2(notifs).to.have.lengthOf(1);
    });
  });

  describe('displayDrawer is false', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect2(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is not displayed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find('div.Notifications');

      expect2(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is empty', () => {
    test('renders correctly if empty array is passed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect2(notifs).to.have.lengthOf(0);
    });

    test('renders correctly if listNotifications prop not specified', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect2(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is NOT empty', () => {
      const nots = [
        {id: 1, type: "default", value: "default notification"},
        {id: 2, type: "urgent", html: { __html: '<strong>Urgent requirement - complete by EOD</strong>' }}
      ];
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={nots} />);
      const notifs = wrapper.find(NotificationItem);

      test('number of notifications correct', () => {
        expect2(notifs).to.have.lengthOf(2);
      });

      test('right attributes for notifications', () => {
        const notif0 = notifs.at(0);
        const notif1 = notifs.at(1);
  
        expect(notif0.props()).toHaveProperty('type', 'default');
        expect(notif0.props()).toHaveProperty('value', 'default notification');
        expect(notif0.props()).toHaveProperty('html', undefined);
  
        expect(notif1.props()).toHaveProperty('type', 'urgent');
        expect(notif1.props()).toHaveProperty('value', '');
        expect(notif1.props()).toHaveProperty('html', {
          __html: '<strong>Urgent requirement - complete by EOD</strong>'
        });
      });
    });

  describe('message displays properly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const noNewNotifs = wrapper.find('[data-testid="notifs"] p');

    expect2(noNewNotifs).to.have.lengthOf(1);
    expect2(noNewNotifs.text()).to.equal('No new notifications for now');
  });

  test('updates only if there are new notifs', () => {
    const initialNotifs = [
      { id: 0, type: 'default', value: 'test 0' },
      { id: 1, type: 'default', value: 'test 1' }
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={initialNotifs} />
    );

    const render = jest.spyOn(Notifications.prototype, 'render');

    expect(render).toHaveBeenCalledTimes(0);

     // listNotifications is longer
     const longerNotifs = initialNotifs.slice();
     longerNotifs.push({ id: 2, type: 'default', value: 'test 2' });
 
     wrapper.setProps({ listNotifications: longerNotifs });
     expect(render).toHaveBeenCalledTimes(1);
 
     // listNotifications stays same
     wrapper.setProps({ listNotifications: longerNotifs });
     expect(render).toHaveBeenCalledTimes(1);
 
     // listNotifications is shorter
     const shorterNotifs = longerNotifs.slice();
     shorterNotifs.pop();
 
     wrapper.setProps({ listNotifications: shorterNotifs });
     expect(render).toHaveBeenCalledTimes(2);
   });

  test('clicking menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );

    const menuItem = wrapper.find('[data-testid="menu-item"]');
    expect2(menuItem).to.have.lengthOf(1);

    menuItem.simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking close button calls hideDisplayDrawer', () => {
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    const close = wrapper.find('[data-testid="close-notifs"]');
    expect2(close).to.have.lengthOf(1);

    close.simulate('click');
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});
