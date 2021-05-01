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
        <div className="menuItem">
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

const styles = StyleSheet.create({
    notifications: {
        border: '2px solid  #e1484c',
        padding: '6px 12px',
        borderStyle: 'dashed',
        /* textAlign: 'left' */
        marginTop: '12px',
        fontSize: '20px',
		'@media (max-width: 900px)': {
			position: 'absolute !important',
			top: '0',
			right: '0',
			left: '0',
			background: 'white'
        }
    },

    menuitem: {
        textAlign: 'right',
        marginBottom: '10px',
        /* fontFamily: 'none', */
        fontWeight: 'bold'
    }

});

export default Notifications;
