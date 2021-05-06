import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;

    return html === undefined ? (
      <li
        className={css(styles[type], styles.small)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    ) : (
      <li
        className={css(styles[type], styles.small)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {}
};

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  },
  small: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px'
    }
  }
});

export default NotificationItem;
