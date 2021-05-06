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

export const normalizedNotifications = normalize(notificationsData, new schema.Array(notification));

export const getAllNotificationsByUser = (userID) => {
  const notifs = notificationsData.filter(item =>  item.author.id === userID);
  const contexts = notifs.map(item => item.context);
  return contexts;
}
