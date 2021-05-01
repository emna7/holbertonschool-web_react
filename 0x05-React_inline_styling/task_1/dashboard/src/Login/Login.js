import React, { Component, Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite';

class Login extends React.Component {
	render () {
		return (
			<Fragment>
				<div className={css(styles.loginBody)}>
					<p>Login to access the full dashboard</p>
					<label htmlFor="email">Email: </label>
					<input className={css(styles.input)} type="email" id="email" name="email" />
					<label htmlFor="password">Password: </label>
					<input className={css(styles.input)} type="password" id="password" name="password" />
					<button>OK</button>
				</div>
			</Fragment>
		);
	}
}

const style = StyleSheet.create({
  loginBody: {
    marginRight: '9px',
    marginLeft: '9px',
  }
  input: {
    margin: '0 2rem'
  }
});

export default Login;

