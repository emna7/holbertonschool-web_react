import { uiReducer } from './uiReducer';
import { expect as expectChai } from 'chai';

var _ = require('lodash');

describe('Test notifications.js', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('test verifying the state returned by the uiReducer function equals the initial state when no action is passed', (done) => {
    const result = uiReducer(initialState, '');
    expectChai(_.isEqual(initialState, result)).to.equal(true);
    done();
  });

  it('est verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', (done) => {
    const result = uiReducer(initialState, 'SELECT_COURSE');
    expectChai(_.isEqual(initialState, result)).to.equal(true);
    done();
  });

  it('test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', (done) => {
    const result = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expectChai(result.isNotificationDrawerVisible).to.equal(true);
    done();
  });
});
