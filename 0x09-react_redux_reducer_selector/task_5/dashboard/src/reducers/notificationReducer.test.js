import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationReducer } from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { expect as expectChai } from 'chai';

var _ = require('lodash');
const { Map, fromJS } = require('immutable');

describe('Test notificationReducer.js', () => {
  const initialState = {
    notifications: [],
    filter: "DEFAULT",
  };

  const data = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  const state = fromJS({
    filter: "DEFAULT",
    notifications: notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]).notifications
  });

  it('Test that the default state returns the initialState', (done) => {
    const result = notificationReducer(undefined, { });
    expectChai(_.isEqual(result.toJS(), initialState)).to.equal(true);
    done();
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed with isRead in false', (done) => {
    const result = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: data });
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expectChai(_.isEqual(result.toJS().notifications, expected.notifications)).to.equal(true);
    expectChai(result.toJS().filter).to.equal('DEFAULT');
    done();
  });

  it('Test that MARK_AS_READ returns the data passed with index passed in true', (done) => {
    const result = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expectChai(_.isEqual(result.toJS().notifications, expected.notifications)).to.equal(true);
    expectChai(result.toJS().filter).to.equal('DEFAULT');
    done();
  });

  it('Test that SET_TYPE_FILTER returns the data passed with the filter passed', (done) => {
    const result = notificationReducer(state, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expectChai(_.isEqual(result.toJS().notifications, expected.notifications)).to.equal(true);
    expectChai(result.toJS().filter).to.equal('URGENT');
    done();
  });
});
