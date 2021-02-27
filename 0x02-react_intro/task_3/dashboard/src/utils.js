export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School Main Dashboard';

export const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';