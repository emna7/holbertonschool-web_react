import React from 'react';

import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export const Notification = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        className='close-icon'
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          src={closeIcon}
          alt='Close'
          style={{ height: '20px', width: '20px' }}
        />
      </button>
    </div>
  );
};
export default Notification;