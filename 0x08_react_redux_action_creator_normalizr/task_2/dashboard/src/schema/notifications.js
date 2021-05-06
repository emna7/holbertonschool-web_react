import * as jsonData from "../../notifications.json";
import { normalize, schema } from "normalizr";

export const getAllNotificationsByUser = (userId) => {
  const messages = normalized.entities.messages;
  const notifications = normalized.entities.notifications;

  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  return notificationsByUser;
};

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(jsonData.default, [notification]);

export { normalized };
