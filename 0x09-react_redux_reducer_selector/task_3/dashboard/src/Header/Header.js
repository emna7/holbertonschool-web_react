import React, { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

import AppContext from '../App/AppContext';

import logo from '../assets/logo.jpg';

class Header extends Component {
  render() {
    const { user, logOut } = this.context;

    return (
      <Fragment>
        <div className={css(styles.header)}>
          <img src={logo} alt='Logo' className={css(styles.logo)}></img>
          <h1 className={css(styles.heading)}>School Dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div id='logoutSection'>
            <p>
              Welcome <strong>{user.email} </strong>
              <em onClick={logOut} className={css(styles.logout)}>
                (logout)
              </em>
            </p>
          </div>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottom: '3px solid #e1345b',
    height: '250px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: '200px',
    height: '200px'
  },
  heading: {
    display: 'inline',
    position: 'relative',
    color: '#e1345b'
  },
  logout: {
    cursor: 'pointer'
  }
});

Header.contextType = AppContext;

export default Header;
