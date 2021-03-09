import React, { Component } from 'react';
import './Notifications.css';
import imgClose from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default class Notifications extends Component {
  closeNotifications () {
    console.log("Close button has been clicked");
  }

  render() {
    return <div className="Notifications">
      <button aria-label="Close"
              onClick={ this.closeNotifications }
              style={
                {position: "absolute",
                top: 10,
                right: 10,
                visibility: "hidden"}
              }
      >
        <img alt="close" src={imgClose}
              style={
                {visibility: "visible",
                height: "15px",
                width: "15px"}
              }
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">
          New course available
        </li>
        <li data-priority="urgent">
          New resume available
        </li>
        <li data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification()}} />
      </ul>
    </div>
  }
}
