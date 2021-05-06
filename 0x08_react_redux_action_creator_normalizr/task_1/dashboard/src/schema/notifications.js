import * as notifData from "../../notifications.json";
import { normalize, schema } from "normalizr";

export const getAllNotificationsByUser = (userId) => {
  return notifData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};
const user = new schema.Entity("users");

const msg = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: msg,
});

const normalizedData = normalize(notifData.default, [notification]);

export { normalizedData };
