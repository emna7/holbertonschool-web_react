import notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schema
const user = new schema.Entity('users');

//Define message schema
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);

//Define notification schema
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

// Normalize JSON data
export const normalizedNotifications = normalize(notificationsData, new schema.Array(notification));

export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedNotifications.entities;

  const userNotifications = [];

  for (let key in notifications)
    if (notifications[key].author === userId)
      userNotifications.push(messages[notifications[key].context]);
    
    return userNotifications;
}
