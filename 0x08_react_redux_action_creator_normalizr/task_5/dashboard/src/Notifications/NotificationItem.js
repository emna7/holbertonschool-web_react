import React from 'react'
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    if (this.props.value) return (<li data-notification-type={this.props.type} onClick={() => { this.props.markAsRead(this.props.id) }} className={css(this.props.type === 'urgent' ? style.urgent : style.default, style.mediumItemNotification)}>{this.props.value}</li>);
    else return (<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => { this.props.markAsRead(this.props.id) }} className={css(this.props.type === 'urgent' ? style.urgent : style.default, style.mediumItemNotification)}></li>);
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => void(0)
}

const style = StyleSheet.create({
  default: {
    color: '#0000ff',
  },
  urgent: {
    color: '#ff0000',
  },
  mediumItemNotification: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px'
    }
  }
});

export default NotificationItem;
