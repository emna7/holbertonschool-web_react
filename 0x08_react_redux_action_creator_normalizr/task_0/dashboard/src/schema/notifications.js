import notificationData from '../../../../notifications.json';

function getAllNotificationsByUser (userId) {
  const notifs = notificationData.filter(item => item.author.id === userId);
  const contextObjs = notifs.map(item => item.context);
  return contextObjs;
};

export default getAllNotificationsByUser;
