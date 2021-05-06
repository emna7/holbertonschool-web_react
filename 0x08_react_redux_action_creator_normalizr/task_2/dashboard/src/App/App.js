import React, { Fragment } from "react";

import PropTypes from "prop-types";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import AppContext from "./AppContext";
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
      listNotifications: [
        {
          id: 0,
          type: "default",
          value: "New course available",
        },
        {
          id: 1,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 2,
          type: "urgent",
          html: { __html: getLatestNotification() },
        },
      ],
    };
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true,
    });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    const self = this;
    self.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false,
    });
  }

  ctrlHEventHandler(e) {
    const k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  handleKeyPressDown() {
    document.addEventListener("keydown", this.ctrlHEventHandler, false);
  }

  componentDidMount() {
    this.handleKeyPressDown();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.ctrlHEventHandler, false);
  }
  markNotificationAsRead(id) {
    const updatedNotifications = this.state.listNotifications.filter(
      (notifi) => {
        return notifi.id !== id;
      }
    );

    this.setState({
      listNotifications: updatedNotifications,
    });
  }

  render() {
    const listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    const { displayDrawer, user, logOut, listNotifications } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className={css(styles.App)}>
          <div className={css(styles.upperBlock)}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>

          {user.isLoggedIn === false && (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          {user.isLoggedIn === true && (
            <BodySectionWithMarginBottom title="Course List">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <div className="bodySectionWithMargin">
            <BodySection title="News from the School">
              <p>This component contain a paragraph with some random text</p>
              <p>This component contain a paragraph with some random text</p>
            </BodySection>
          </div>

          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
const styles = StyleSheet.create({
  App: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto, sans-serif",
    marginLeft: "20px",
    marginRight: "20px",
    minHeight: "100vh",
    position: "relative",
  },
  button: {
    marginLeft: "10px",
    height: "20px",
  },
  upperBlock: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderBottom: "4px solid #e0003c",
  },
});
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
