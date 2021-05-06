import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AppContext from '../App/AppContext';

import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className={css(styles.footer)}>
          <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
          {value.user.isLoggedIn && <p data-testid='contact'>Contact us</p>}
        </div>
      )}
    </AppContext.Consumer>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    textAlign: 'center',
    fontStyle: 'italic',
    padding: '1rem 0',
    backgroundColor: 'white',
    position: 'fixed',
    '@media (max-width: 900px)': {
      position: 'static'
    }
  }
});

export default Footer;
