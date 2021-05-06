import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

describe('ui action creators return expected values', () => {
  test('login', () => {
    const ret = login('juno@domain.tld', 'gecgecgec');

    expect(ret).toHaveProperty('type', LOGIN);
    expect(ret.user).toHaveProperty('email', 'juno@domain.tld');
    expect(ret.user).toHaveProperty('password', 'gecgecgec');
  });

  test('logout', () => {
    const ret = logout();

    expect(ret).toHaveProperty('type', LOGOUT);
  });

  test('displayNotificationDrawer', () => {
    const ret = displayNotificationDrawer();

    expect(ret).toHaveProperty('type', DISPLAY_NOTIFICATION_DRAWER);
  });

  test('hideNotificationDrawer', () => {
    const ret = hideNotificationDrawer();

    expect(ret).toHaveProperty('type', HIDE_NOTIFICATION_DRAWER);
  });
});
