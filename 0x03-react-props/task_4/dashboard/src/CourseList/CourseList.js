import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}></CourseListRow>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}></CourseListRow>
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader=false></CourseListRow>
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" ihHeader={false}></CourseListRow>
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader=false></CourseListRow>
      </tbody>
    </table>
  );
}

export default CourseList;
