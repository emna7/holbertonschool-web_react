import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import closeIcon from '../assets/close-icon.png';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends PureComponent {
  render() {
    const {
      listNotifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead
    } = this.props;

    return (
      <div className={css(styles.wrapper)} data-testid='wrapper'>
        <div
          className={css(styles.div, styles['menu-item'])}
          data-testid='menu-item'
          onClick={handleDisplayDrawer}
        >
          Your Notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.div, styles.notifs)} data-testid='notifs'>
            {listNotifications.length ? (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      key={id}
                      id={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={markNotificationAsRead}
                    />
                  ))}
                </ul>
              </Fragment>
            ) : (
              <p>No new notifications for now</p>
            )}
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
              aria-label='Close'
              onClick={handleHideDrawer}
              data-testid='close-notifs'
            >
              <img
                src={closeIcon}
                alt='Close'
                style={{ height: '20px', width: '20px' }}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};

const opacityKeyframes = {
  from: {
    opacity: '0.5'
  },
  to: {
    opacity: '1'
  }
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)'
  },
  '50%': {
    transform: 'translateY(-5px)'
  },
  '100%': {
    transform: 'translateY(5px)'
  }
};

const styles = StyleSheet.create({
  div: {
    padding: '1rem',
    position: 'relative',
    margin: '0.5rem',
    '@media (max-width: 900px)': {
      padding: '0'
    }
  },
  notifs: {
    border: '1px dashed #e1354b',
    marginTop: '0',
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      width: '95vw',
      height: '95vh',
      margin: '0',
      zIndex: '10',
      border: '1px solid lightgray',
      fontSize: '20px'
    }
  },
  'menu-item': {
    marginBottom: 0,
    '@media (max-width: 900px)': {
      display: 'none'
    },
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationTimingFunction: 'ease, ease'
    }
  },
  wrapper: {
    position: 'absolute',
    right: '12px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  },
  list: {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      paddingLeft: '0'
    }
  }
});

export default Notifications;
