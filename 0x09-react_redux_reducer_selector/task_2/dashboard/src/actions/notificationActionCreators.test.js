import {
  markAsRead,
  setNotificationFilter
} from './notificationActionCreators';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from './notificationActionTypes';

describe('notification action creators return expected values', () => {
  test('markAsRead', () => {
    const ret = markAsRead(1);

    expect(ret).toHaveProperty('type', MARK_AS_READ);
    expect(ret).toHaveProperty('index', 1);
  });

  test('setNotificationFilter', () => {
    const { DEFAULT, URGENT } = NotificationTypeFilters;

    let ret = setNotificationFilter(DEFAULT);

    expect(ret).toHaveProperty('type', SET_TYPE_FILTER);
    expect(ret).toHaveProperty('filter', DEFAULT);

    ret = setNotificationFilter(URGENT);

    expect(ret).toHaveProperty('type', SET_TYPE_FILTER);
    expect(ret).toHaveProperty('filter', URGENT);
  });
});
