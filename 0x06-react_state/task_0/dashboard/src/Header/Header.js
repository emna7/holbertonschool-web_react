import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { css, StyleSheet } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img
        src={logo}
	className={css(styles.appLogo)}
	alt='logo'
      />
      <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#fff',
    justifyContent: 'left',
  },
  appLogo: {
    height: '100px',
    width: '100px',
  },
  appHeaderH1: {
    position: 'relative',
    display: 'inline',
  }
});

export default Header;
