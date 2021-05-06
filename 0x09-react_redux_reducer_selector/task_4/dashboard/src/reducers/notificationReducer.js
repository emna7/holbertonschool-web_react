import { Map } from 'immutable';

import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      action.data = notificationNormalizer(
        action.data.map((notif) => ({ ...notif, isRead: false }))
      );
      return state.setIn(['notifications'], action.data);
    case MARK_AS_READ:
      return state.setIn(
        [
          'notifications',
          'entities',
          'notifications',
          action.index.toString(),
          'isRead'
        ],
        true
      );
    case SET_TYPE_FILTER:
      return state.setIn(['filter'], action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
