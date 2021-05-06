import React, { Component } from "react";
import logo from "../assets/Holberton logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.AppHeader)}>
        <img className={css(styles.Applogo)} src={logo} alt="logo" />
        <h1 className={css(styles.heading1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span className={css(styles.logoutSectionSpan)} onClick={logOut}>
              (logout)
            </span>
          </p>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    textColor: "#e1484c",
  },
  Applogo: {
    height: "250px",
  },
  heading1: {
    color: "#e1484c",
  },
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

Header.contextType = AppContext;

export default Header;
