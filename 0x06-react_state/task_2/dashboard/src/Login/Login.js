import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit() {
    this.setState({ displayisLoggedInDrawer: true });
  }

  handleSubmit(event) {
    this.props.logIn(this.state.email, this.state.password);
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    if (event.target.value.length !== 0 && this.state.password.length !== 0)
      this.setState({ enableSubmit: true });
    else
      this.setState({ enableSubmit: false });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    if (this.state.email.length !== 0 && event.target.value.length !== 0)
      this.setState({ enableSubmit: true });
    else
      this.setState({ enableSubmit: false });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(style.mediumContainer)}>
          <form onSubmit={this.handleSubmit}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} 
                   className={css(style.loginContainerInput, style.mediumLogin)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={this.state.password} 
                   onChange={this.handleChangePassword} className={css(style.loginContainerInput, style.mediumLogin)}/>          
            <input type="submit" value="OK" disabled={!this.state.enableSubmit} className={css(style.mediumLogin)}/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {

};

Login.defaultProps = {

};

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
