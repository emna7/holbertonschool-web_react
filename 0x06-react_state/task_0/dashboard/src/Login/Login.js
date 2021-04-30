import React, { Component, Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite';

class Login extends React.Component {
    render() {
        return (
    <Fragment>
    <div className={css(styles.login)}>
        <p> Login to access the full dashbord </p>
    <form>
        <div className={css(styles.LoginContainer)}>
            <label htmlFor="email"> Email: </label> 
            <input className={css(styles.loginBody)} type="email" id = "email" />
        </div>
        <div className={css(styles.LoginContainer)}>
            <label htmlFor="password"> Password: </label>
            <input className={css(styles.loginBody)} type="password" id= "password" />
        </div>
        <div className={css(styles.LoginContainer)}>
            <button className={css(styles.button)}>OK</button>
        </div>
    </form>
    </div>
    </Fragment>
);
}
};

const styles = StyleSheet.create({
    login: {
        margin: '48px 0 0 32px',
        textAlign: 'left',
        fontSize: '16px'
    },

    loginBody: {
        maxWidth: '90%',
        margin: '0 auto',
        
    },
    
    button: {
        marginLeft: '10px',
        height: '20px'
    },

    LoginContainer: {
		display: 'inline',
		'@media (max-width: 900px)': {
			display: 'block',
	}
    }
});

export default Login;
