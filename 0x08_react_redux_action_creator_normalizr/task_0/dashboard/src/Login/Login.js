import React, { Fragment, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    const { email, password } = this.state;

    this.props.logIn(email, password);

    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ ...this.state, email: event.target.value }, () => {
      const { email, password } = this.state;

      if (email !== '' && password !== '')
        this.setState({ ...this.state, enableSubmit: true });
    });
  }

  handleChangePassword(event) {
    this.setState({ ...this.state, password: event.target.value }, () => {
      const { email, password } = this.state;

      if (email !== '' && password !== '')
        this.setState({ ...this.state, enableSubmit: true });
    });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <Fragment>
        <p>Log in to access the full dashboard</p>
        <div>
          <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
            <div className={css(styles['input-group'])}>
              <label
                htmlFor='email'
                className={css(styles['email-label'], styles.label)}
              >
                Email:
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={this.handleChangeEmail}
              />
            </div>

            <div className={css(styles['input-group'])}>
              <label htmlFor='password' className={css(styles.label)}>
                Password:
              </label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={this.handleChangePassword}
              />
            </div>

            <input
              type='submit'
              className={css(styles.button)}
              disabled={!enableSubmit}
              data-testid='submit'
            />
          </form>
        </div>
      </Fragment>
    );
  }
}

Login.displayName = 'Login';

const styles = StyleSheet.create({
  label: {
    '@media (min-width: 901px)': {
      padding: '1rem'
    },
    '@media (max-width: 900px)': {
      marginRight: '0.5rem'
    }
  },
  'email-label': {
    padding: '0'
  },
  button: {
    '@media (min-width: 901px)': {
      margin: '0 2rem'
    },
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  'input-group': {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  }
});

Login.propTypes = {
  logIn: PropTypes.func
};

Login.defaultProps = {
  logIn: () => {}
};

export default Login;
