import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types'; // ES6
import CourseShape from "./CourseShape";
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {

  return (
    <div className={css(style.containerCourse)}>
      <table id='CourseList' className={css(style.tableStyle)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses"></CourseListRow>
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
        </thead>
        <tbody>
          {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const style = StyleSheet.create({
  containerCourse: {
    minHeight: '26rem',
    padding: '1rem'
  },
  tableStyle: {
    width: '100%',
    borderCollapse: 'collapse'
  }
});

export default CourseList;
