import React from "react";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

const CourseList = ({ listCourses }) => {
  if (listCourses.length == 0) {
    return <div> No course available yet</div>;
  } else
    return (
      <table className={css(styles.table)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.map((course) => {
            return (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            );
          })}
        </tbody>
      </table>
    );
};
const styles = StyleSheet.create({
  table: {
    margin: "20px auto",
    width: "85%",
    border: "1px solid lightgrey",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
