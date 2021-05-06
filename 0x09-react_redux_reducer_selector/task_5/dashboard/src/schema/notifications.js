import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
export const normalizedData = normalize(notifications.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notiEntity = normalizedData.entities.notifications;
  const messEntity = normalizedData.entities.messages;
  const result = [];

  for (let key in notiEntity) {
    if (notiEntity[key].author === userId) {
      const context = notiEntity[key].context;
      result.push(messEntity[context]);
    }
  }

  return result;
}

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]).entities;
};

export default getAllNotificationsByUser;
