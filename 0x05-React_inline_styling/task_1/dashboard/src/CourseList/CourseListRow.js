import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class CourseListRow extends Component {
	render() {

		let {
			isHeader,
			textFirstCell,
			textSecondCell,
		} = this.props;

		if (isHeader === true && textSecondCell == null) {
			return (
				<tr className={css(styles.headerRow)} >
					<th colSpan={2}>
						{textFirstCell}
					</th>
				</tr>
			);
		} else if (isHeader === true && textSecondCell != null) {
			return (
				<tr className={css(styles.Row)} >
					<th>
						{textFirstCell}
					</th>
					<th>
						{textSecondCell}
					</th>
				</tr>
			);
		} else if (isHeader === false) {
			return (
				<tr className={css(styles.row)} >
					<td>
						{textFirstCell}
					</td>
					<td>
						{textSecondCell}
					</td>
				</tr>
			);
		}
	}
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
    },
  headerRow: {
    backgroundColor: '#deb5b545',
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
