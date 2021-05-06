import React from 'react';
import PropTypes from 'prop-types'; // ES6

class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string
}

BodySection.defaultProps = {
  title: ''
}

export default BodySection;
