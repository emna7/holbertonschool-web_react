import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {displayDrawer: false};
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
}

  handleHideDrawer() {
    this.setState({displayDrawer: false});
}


  componentDidMount() {
      window.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
      window.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout (event) {
      if (event.ctrlKey && event.key === 'h') {
          event.preventDefault();
          alert("Logging you out");
          this.props.logOut();
      }
    }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
      }
    ];

    return (
      <Fragment>
        <Notifications 
        listNotifications={listNotifications}
        displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer} 
        />
        <div className={css(styles['sans-serif'])}>
          <Header />
            <div className={css(styles.padding)}>
              {!isLoggedIn && (
                  <BodySectionWithMarginBottom title='Log in to continue'>
                    <Login />
                  </BodySectionWithMarginBottom>
                )}
                {isLoggedIn && (
                  <BodySectionWithMarginBottom title='Course List'>
                    <CourseList listCourses={listCourses} />
                  </BodySectionWithMarginBottom>
                )}
                <BodySection title='News from the School'>
                  <p>
                    A paragraph with some random text. A paragraph with some random text.
                    A paragraph with some random text. A paragraph with some random text.
                    A paragraph with some random text. A paragraph with some random text.
                  </p>
                </BodySection>
              </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined
};

const styles = StyleSheet.create({
  'sans-serif': {
    fontFamily: 'sans-serif'
  },
  padding: {
    '@media (min-width: 901px)': {
      padding: '4rem'
    },
    '@media (max-width: 900px)': {
      padding: '2rem 2rem 50px 2rem'
    }
  }
});

export default App;
