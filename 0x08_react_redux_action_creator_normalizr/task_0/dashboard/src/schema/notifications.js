import * as notifData from "../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
  return notifData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};
