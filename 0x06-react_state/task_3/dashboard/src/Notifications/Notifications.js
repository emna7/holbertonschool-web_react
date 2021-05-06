import React, { Component, Fragment, PureComponent } from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    //this.markAsRead = this.markAsRead.bind(this);
  }
  /*
  shouldComponentUpdate(nextProps) {
    const { listNotifications, displayDrawer } = this.props;
    // returns true render will be invoked
    return (
      listNotifications.length < nextProps.listNotifications.length ||
      nextProps.displayDrawer !== displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  */

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <div className="NotificationsComponent">
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              id="close"
              onClick={handleHideDrawer}
              style={{
                float: "right",
                postion: "relative",
                top: "-40",
                background: "none",
                border: "none",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close-icon" width="20px" />
            </button>
            {listNotifications.length === 0 && (
              <p>No new notification for now</p>
            )}
            {listNotifications.length > 0 && (
              <Fragment>
                <div className={css(styles.notificationBox)}>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {listNotifications.map((notif) => {
                      return (
                        <NotificationItem
                          key={notif.id}
                          type={notif.type}
                          value={notif.value}
                          html={notif.html}
                          markAsRead={markNotificationAsRead}
                        />
                      );
                    })}
                  </ul>
                </div>
              </Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

const opacityFrames = {
  "0%": {
    opacity: 0.5,
  },
  "50%": {
    opacity: 0.75,
  },
  "100%": {
    opacity: 1,
  },
};

const bounceFrames = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-10px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid #e1484c",
    borderStyle: "dashed",
    padding: "10px",
    textAlign: "left",
    position: "relative",
    marginTop: "12px",
    fontSize: "20px",
    "@media (max-width: 900px)": {
      position: "absolute !important",
      top: "0",
      right: "0",
      left: "0",
      background: "white",
    },
  },
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "none",
    pointer: "cursor",
    background: "#fff8f8",
    ":hover": {
      animationName: [opacityFrames, bounceFrames],
      animationDuration: "1s, .5s",
      animationIterationCount: "3",
    },
  },
  notificationBox: {
    marginRight: "60px",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};
export default Notifications;
