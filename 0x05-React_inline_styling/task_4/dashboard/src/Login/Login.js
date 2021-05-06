import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login(){
  return (
    <React.Fragment>
      <div className={css(style.mediumContainer)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={css(style.loginContainerInput, style.mediumLogin)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className={css(style.loginContainerInput, style.mediumLogin)}/>
        <button className={css(style.mediumLogin)}>OK</button>
      </div>
    </React.Fragment>
  )
}

const style = StyleSheet.create({
  loginContainerInput: {
    marginRight: '9px',
    marginLeft: '9px',
  },
  mediumContainer: {
    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    }
  },
  mediumLogin: {
    '@media (max-width: 900px)': {
      width: '30%',
      margin: '9px 0',
  }
  }
});

export default Login;
