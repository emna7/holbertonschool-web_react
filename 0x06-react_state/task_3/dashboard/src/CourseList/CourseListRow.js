import React from "react";
import PropTypes, { bool } from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader === true && textSecondCell == null) {
    return (
      <tr className={css(styles.headerRowStyle)}>
        <th className={css(styles.thTd)} colSpan={2}>
          {textFirstCell}
        </th>
      </tr>
    );
  } else if (isHeader === true && textSecondCell != null) {
    return (
      <tr className={css(styles.rowStyle)}>
        <th className={css(styles.thTd)}>{textFirstCell}</th>
        <th className={css(styles.thTd)}>{textSecondCell}</th>
      </tr>
    );
  } else if (isHeader === false) {
    return (
      <tr className={css(styles.rowStyle)}>
        <td className={css(styles.thTd)}>{textFirstCell}</td>
        <td className={css(styles.thTd)}>{textSecondCell}</td>
      </tr>
    );
  }
};
const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRowStyle: {
    backgroundColor: "#deb5b545",
  },
  thTd: {
    border: "1px solid lightgray",
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
export default CourseListRow;
