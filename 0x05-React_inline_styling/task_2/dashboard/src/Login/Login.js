import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login(){
  return (
    <React.Fragment>
      <div className="login-container">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={css(style.loginContainerInput)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className={css(style.loginContainerInput)}/>
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const style = StyleSheet.create({
  loginContainerInput: {
    marginRight: '9px',
    marginLeft: '9px',
  }
});

export default Login;
