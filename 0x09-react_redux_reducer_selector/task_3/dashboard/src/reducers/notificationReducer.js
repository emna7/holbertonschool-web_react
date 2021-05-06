import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

const notificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notif) => ({ ...notif, isRead: false }))
      };
    case MARK_AS_READ:
      const notifications = state.notifications.map((notif) => {
        if (notif.id === action.index) notif.isRead = true;
        return notif;
      });

      return { ...state, notifications };
    case SET_TYPE_FILTER:
      return { ...state, filter: NotificationTypeFilters[action.filter] };
    default:
      return state;
  }
};

export default notificationReducer;
