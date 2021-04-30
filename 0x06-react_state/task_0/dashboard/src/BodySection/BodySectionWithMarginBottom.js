import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css(styles.margin)}>
				<BodySection {...this.props} />
			</div>
		);
	};
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}

const styles = StyleSheet.create({
 margin: {
    marginBottom: '30px'
  }
});
export default BodySectionWithMarginBottom;
