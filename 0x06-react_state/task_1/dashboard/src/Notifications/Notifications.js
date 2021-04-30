import React from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes, { nominalTypeHack } from 'prop-types'; // ES6
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const btnStyle = {
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
};

const imgStyle = {
  width: '20px',
  height: '20px',
}

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { listNotifications, displayDrawer } = this.props;
    // returns true render will be invoked
    return (
      listNotifications.length < nextProps.listNotifications.length ||
      nextProps.displayDrawer !== displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <div className={css(style.notificationContainer, style.mediumNotificationContainer)}>
        <div className={css(style.menuItem, displayDrawer ? style.hideElement: '')}
             id="menuItem"
             onClick={handleDisplayDrawer}
        >Your notifications</div>
        { displayDrawer ?
          (<div className={css(style.notifications, style.mediumNotification)} id="notifications">
            <button style={btnStyle} aria-label='Close' onClick={handleHideDrawer} id="closeNotifications">
              <img src={close_icon} alt='Close' style={imgStyle}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(style.mediumUl)}>
              {listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    );
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },

  'to': {
      opacity: 1,
  }
};

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
      transform: 'translateY(0)',
  },
};

const style = StyleSheet.create({
  notifications: {
    border: '3px dashed #e1354b',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    width: '25rem',
    background: 'white none repeat scroll 0% 0%',
  },
  mediumNotification: {
    '@media (max-width: 900px)': {
      border: 'none',
      width: '100%',
      height: '100%',
    }
  },
  menuItem: {
    marginBottom: '10px',
    float: 'right',
    textAlign: 'end',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    }
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '12px',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  mediumNotificationContainer: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '6',
      display: 'block !important',
    }
  },
  hideElement: {
    display: 'none',
  },
  mediumUl: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '0',
    }
  }
});

export default Notifications;
