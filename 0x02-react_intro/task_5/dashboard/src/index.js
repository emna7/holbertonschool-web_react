import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.render(
  <React.StrictMode>
   <p>DUMB APP</p>
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
 <React.StrictMode>
   <Notifications/>
   </React.StrictMode>,
   document.getElementById('root-notifications')
);

reportWebVitals();
