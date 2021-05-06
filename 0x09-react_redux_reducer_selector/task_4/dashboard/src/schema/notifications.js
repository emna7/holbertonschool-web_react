import { normalize, schema } from 'normalizr';

import notifs from '../../../../notifications.json';

// Define schema
const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
const notifsArray = new schema.Array(notification);

// Normalize JSON data
export const normalizedNotifs = normalize(notifs, notifsArray);

export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedNotifs.entities;

  const userNotifications = [];
  for (let key in notifications)
    if (notifications[key].author === userId)
      userNotifications.push(messages[notifications[key].context]);

  return userNotifications;
};

// Normalize notifications
export const notificationNormalizer = (data) => normalize(data, notifsArray);
