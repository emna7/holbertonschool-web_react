import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { expect as expectChai } from 'chai';

var _ = require('lodash');

describe('Test uiActionCreators.js', () => {
  it('test for LOGIN' , (done) => {
    const data = login('test@test.com', 'test');
    const result = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for LOGOUT', (done) => {
    const data = logout(1);
    const result = { type: LOGOUT };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for DISPLAY_NOTIFICATION_DRAWER', (done) => {
    const data = displayNotificationDrawer(1);
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for HIDE_NOTIFICATION_DRAWER', (done) => {
    const data = hideNotificationDrawer(1);
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });
});
