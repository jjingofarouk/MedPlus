// ContinuingEducation.js
import React, { useState } from 'react';

const ContinuingEducation = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Cardiology Update 2024", credits: 15 },
    { id: 2, title: "Neuroscience Advances", credits: 10 },
  ]);
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCompleteCourse = (id) => {
    const course = courses.find(c => c.id === id);
    if (course) {
      setCompletedCourses([...completedCourses, course]);
    }
  };

  return (
    <div>
      <h3>Continuing Medical Education</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title} - {course.credits} credits
            <button onClick={() => handleCompleteCourse(course.id)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
      <h4>Completed Courses</h4>
      <ul>
        {completedCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContinuingEducation;
