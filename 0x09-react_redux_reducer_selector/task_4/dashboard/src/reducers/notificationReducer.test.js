import { Map } from 'immutable';

import notificationReducer from './notificationReducer';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: [],
    filter: 'DEFAULT'
  });

  const data = [
    {
      id: 1,
      type: 'default',
      value: 'New course available'
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available'
    },
    {
      id: 3,
      type: 'urgent',
      value: 'New data available'
    }
  ];

  test('state does not change when no action is provided', () => {
    const state = notificationReducer(initialState);

    expect(state).toEqual(initialState);
  });

  test('state changes as expected when FETCH_NOTIFICATION_SUCCESS is passed', () => {
    const state = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    }).toJS();

    // Check returned state
    expect(state).toHaveProperty('filter', 'DEFAULT');
    expect(Object.prototype.toString.call(state.notifications)).toBe(
      '[object Object]'
    );

    const notifications = state.notifications.entities.notifications;

    // Check notifications objects
    expect(notifications[1]).toEqual({ ...data[0], isRead: false });
    expect(notifications[2]).toEqual({ ...data[1], isRead: false });
    expect(notifications[3]).toEqual({ ...data[2], isRead: false });
  });

  test('state changes as expected when MARK_AS_READ is passed', () => {
    // Get notifications
    let state = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    });

    state = notificationReducer(state, { type: MARK_AS_READ, index: 2 }).toJS();

    // Check returned state
    expect(state).toHaveProperty('filter', 'DEFAULT');
    expect(Object.prototype.toString.call(state.notifications)).toBe(
      '[object Object]'
    );

    const notifications = state.notifications.entities.notifications;

    // Check notifications objects
    expect(notifications[1]).toEqual({ ...data[0], isRead: false });
    expect(notifications[2]).toEqual({ ...data[1], isRead: true });
    expect(notifications[3]).toEqual({ ...data[2], isRead: false });
  });

  test('state changes as expected when SET_TYPE_FILTER is passed', () => {
    // Get notifications
    let state = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    });

    state = notificationReducer(state, {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    }).toJS();

    expect(state).toHaveProperty('filter', 'URGENT');

    state = Map(state);

    state = notificationReducer(state, {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    }).toJS();

    expect(state).toHaveProperty('filter', 'DEFAULT');
  });
});
