import React from 'react';
import BodySection from './BodySection'
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(style.bodySectionWithMargin)}>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

const style = StyleSheet.create({
  bodySectionWithMargin: {
    marginTop: '40px'
  }
});

export default BodySectionWithMarginBottom;
