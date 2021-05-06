import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);

  const style = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };

  const checkOnChange = ({ target }) => {
    setChecked(target.checked);
  };

  return (
    <tr style={style} className={checked ? css(styles.rowChecked) : ''}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan='2' className={css(styles.cell)}>
            {textFirstCell}
          </th>
        ) : (
          <Fragment>
            <th className={css(styles.cell, styles['align-left'])}>
              {textFirstCell}
            </th>
            <th className={css(styles.cell, styles['align-left'])}>
              {textSecondCell}
            </th>
          </Fragment>
        )
      ) : (
        <Fragment>
          <td className={css(styles.cell)}>
            <input type='checkbox' onChange={checkOnChange} />
            {textFirstCell}
          </td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </Fragment>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const styles = StyleSheet.create({
  cell: {
    padding: '0.25rem',
    border: '1px solid lightgray'
  },
  'align-left': {
    textAlign: 'left'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
