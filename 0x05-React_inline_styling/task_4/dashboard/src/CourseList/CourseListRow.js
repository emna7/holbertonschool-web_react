import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let trContent = '';
  let bodyStyle = { backgroundColor: '#f5f5f5ab' };
  let headerStyle = { backgroundColor: '#deb5b545' };
  const styleInLine = isHeader ? headerStyle : bodyStyle;

  if (isHeader) {
    if (textSecondCell === null) {
      trContent = (<th colSpan='2' className={css(style.thFirt, style.thTd)}>{textFirstCell}</th>);
    }
    else {
      trContent = (<React.Fragment>
        <th className={css(style.thTd)}>{textFirstCell}</th>
        <th className={css(style.thTd)}>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    trContent = (<React.Fragment>
      <td className={css(style.thTd)}>{textFirstCell}</td>
      <td className={css(style.thTd)}>{textSecondCell}</td></React.Fragment>);
  }

  return (<tr style={styleInLine}>{trContent}</tr>);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const style = StyleSheet.create({
  thFirt: {
    textAlign: 'center',
  },
  thTd: {
    padding: '0.25rem',
    border: '1px solid lightgray',
  }
});

export default CourseListRow;
