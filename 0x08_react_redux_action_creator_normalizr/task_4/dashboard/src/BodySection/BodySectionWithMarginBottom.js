import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />

        {/* <BodySection
          title={this.props.title}
          children={this.props.children}
        ></BodySection> */}
      </div>
    );
  }
}
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

export default BodySectionWithMarginBottom;
