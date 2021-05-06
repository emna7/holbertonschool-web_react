import React, { Fragment } from 'react';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatesNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css} from 'aphrodite';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayDrawer: false};
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  handleKeypress(e) {
    if(e.specKey === 72 && e.ctrlKey === 17) {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener("Keydown", this.handleKeypress);
  }
  
  componentWillUnmount() {
    window.removeEventListener("Keydown", this.handleKeypress);
  };

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;
    const listCourses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];
  
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        html: { __html: getLatesNotification() },
      }
  ];
    return (
      <Fragment>
        <div className={css(styles.app)}>
          <div className={css(styles.Notifh)}>
        <Notifications listNotifications={listNotifications}
        displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        />
          <Header />
          </div>
          <div className={css(styles.text)}>
            {this.props.isLoggedIn === false &&
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login isLoggedIn={this.props.isLoggedIn} />
            </BodySectionWithMarginBottom>
            }
            {this.props.isLoggedIn === true &&
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p> this is a Holberton School task </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    fontFamily: 'Roboto, sans-serif',
    minHeight: '100vh',
    position: 'relative'
  },
  Notifh: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottom: '7px solid #e0003c'
  },
  
  text: {
    padding: '2px 8px',
    textAlign: 'center'
  }
});


export default App;
