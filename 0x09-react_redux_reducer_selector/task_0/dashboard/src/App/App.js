import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types'; // ES6
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut } from './AppContext';
import AppContext from './AppContext';


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = { 
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } })
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const newListNotification = this.state.listNotifications.filter(notification => { return notification.id !== id; });
    this.setState({ listNotifications: this.state.listNotifications.filter(notification => { return notification.id !== id }) });
  }

  render() {
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Notifications listNotifications={this.state.listNotifications} displayDrawer={this.state.displayDrawer} 
                       handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}></Notifications>
        <div className='App'>
          <Header></Header>
          <div className={css(style.appBody)}>
            {this.state.user.isLoggedIn ? 
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} ></CourseList>
              </BodySectionWithMarginBottom> : 
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn}></Login>
              </BodySectionWithMarginBottom>}
            <BodySection title='News from the School'>
              <p>Some news</p>
            </BodySection>
          </div>
          <div className={css(style.appFooter)}>
            <Footer></Footer>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  
};

App.defaultProps = {
  
};

const style = StyleSheet.create({
  appBody: {
    backgroundColor: '#fff',
    padding: '4rem',
    minHeight: '26rem',
  },
  appFooter: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
});

export default App;
