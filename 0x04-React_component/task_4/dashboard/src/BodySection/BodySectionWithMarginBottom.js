import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}
export default BodySectionWithMarginBottom;
