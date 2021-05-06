import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    let liStyle = css(type === "urgent" ? styles.urgent : styles.default);

    if (html === undefined)
      return (
        <li
          className={liStyle}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    else
      return (
        <li
          className={liStyle}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
        ></li>
      );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};
const styles = StyleSheet.create({
  default: {
    color: "blue",
    padding: "10px 8px",
    "@media (max-width: 900px)": {
      width: "100%",
      fontSize: "20px",
      borderBottom: "1px solid black",
    },
  },

  urgent: {
    color: "red",
    padding: "10px 8px",
    "@media (max-width: 900px)": {
      width: "100%",
      fontSize: "20px",
      borderBottom: "1px solid black",
    },
  },
});

export default NotificationItem;
