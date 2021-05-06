export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return state.get('notifications');
};

export const getUnreadNotifications = (state) => {
  const notifications = Object.values(getNotifications(state).toJS());
  return notifications.filter((notification) => notification.isRead);
};
