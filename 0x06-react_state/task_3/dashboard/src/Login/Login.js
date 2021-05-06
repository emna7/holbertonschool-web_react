import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventdefault();
    const { email, password } = this.state;
    this.props.logIn({ email, password });
  }

  handleChangeEmail(e) {
    const value = e.target.value;
    const { password } = this.state;
    const enable = password.length > 0 && value.length > 0;
    this.setState({ email: value, enableSubmit: enable });
  }

  handleChangePassword(e) {
    const value = e.target.value;
    const { email } = this.state;
    const enable = email.length > 0 && value.length > 0;
    this.setState({ password: value, enableSubmit: enable });
  }

  render(){
    const { email, password, enableSubmit } = this.state
    return (
      <React.Fragment>
        <div className={css(style.mediumContainer)}>
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChangeEmail}
              className={css(style.loginContainerInput, style.mediumLogin)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
              className={css(style.loginContainerInput, style.mediumLogin)}
            />
            <input
              type="submit"
              value="OK"
              onSubmit={this.handleLoginSubmit}
              className={css(style.mediumLogin)}
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
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
