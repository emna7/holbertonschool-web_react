import React from 'react';
import logo from "../assets/holberton_logo.jpg"
import { StyleSheet, css} from 'aphrodite';

const Header = () => { 
    return (
        <div className={css(styles.appHeader)}>
        <img className={css(styles.appLogo)} src={logo} alt="logo"/>
        <h1 className={css(styles.appH1)}> School dashbord </h1>
      </div>
    )
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItem: 'center',
  },

  appLogo: {
    height: '150px',
  },

  appH1: {
    margin: 'auto auto auto 0',
    color: '#e1484c',
  }
});

export default Header;
