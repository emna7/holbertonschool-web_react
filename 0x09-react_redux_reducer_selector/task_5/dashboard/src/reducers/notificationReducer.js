import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const { Map, setIn } = require('immutable');

export const initialState = {
  notifications: [],
  filter: "DEFAULT",
};

export const notificationReducer = (state = Map(initialState), action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const data = notificationsNormalizer(action.data);
      Object.keys(data.notifications).map((key) => {
        data.notifications[key].isRead = false;
      });
      return state.merge(data);
    case MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      break;
  }

  return state;
};

export default notificationReducer;
