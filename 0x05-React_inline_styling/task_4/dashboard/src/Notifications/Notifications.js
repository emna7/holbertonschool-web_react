import React, { Fragment } from 'react';
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem.js";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite'; 

class Notifications extends React.Component {
    constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

    shouldComponentUpdate(propsUp) {
		if (this.props.listNotifications.length < propsUp.listNotifications.length) {
			return true;
		}
		return false;
	};

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};

    render() {
        let {displayDrawer, listNotifications,} = this.props;
        return (
            <div className="The Component">
        <div className={css(styles.menuItem)}>
            Your notifications
        </div>
        
        {displayDrawer && (
            <div className={css(styles.notifications)}>
                {listNotifications.length ? (
            <Fragment>
            <p>Here is the list of notifications</p>
            <ul>
                {listNotifications.map(notifi => {
                    return (
                        <NotificationItem className={css(styles.menuitem)} 
                        key={notifi.id}
                        html={notifi.html}
                        type={notifi.type}
                        value={notifi.value}
                        markAsRead={this.markAsRead}
                        />
                    )
                })}
            </ul>
            </Fragment>
            ) : (
                <p>No new notifications for now</p>
              )}
            <button
                style={{
					    color: '#3a3a3a',
						fontWeight: 'bold',
						background: 'none',
						border: 'none',
						fontSize: '20px',
						position: 'absolute',
						right: '30px',
						top: '40px',
						cursor: 'pointer',
						outline: 'none',
				}}
             aria-label="Close" 
            onClick={(e) => {
                console.log('Close button has been clicked');
            }} >
                <img src={close_icon} alt="close-icon" />
            </button>
        </div>
        )}
        </div>
    );
        
    }
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

const opacity = {
	'0%': {
		opacity: .5,
	},
	'50%': {
		opacity: .75,
	},
	'100%': {
		opacity: 1,
	},
};

const bounce = {
	'0%': {
		transform: 'translateY(0)',
	},
	'50%': {
			transform: 'translateY(-10px)',
	},
	'100%': {
			transform: 'translateY(0)',
	},
};

const styles = StyleSheet.create({
	notifications: {
		border: `2px dotted var(--holberton-red)`,
		padding: '6px 12px',
		position: 'relative',
		marginTop: '12px',
		fontSize: '20px',
		position: 'absolute !important',
		top: '-2px',
		right: '0',
		left: '0',
		background: '#fff8f8',
		'@media (max-width: 900px)': {
			position: 'absolute !important',
			top: '0',
			right: '0',
			left: '0',
			background: '#fff8f8',
		},
	},
	menuItem: {
		textAlign: 'right',
		fontWeight: 'bold',
		pointer: 'cursor',
		background: '#fff8f8',
		':hover': {
			animationName: [opacity, bounce],
			animationDuration: '1s, .5s',
			animationIterationCount: '3',
		}
	},
});

export default Notifications;
