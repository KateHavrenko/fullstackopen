import React from "react";
import Total from "./Total";

const Course = ({ course }) => {
  const listCourses = course.map((course) => {
    return (
      <>
        <h1>{course.name}</h1>
        {course.parts.map((part, key) => {
          return (
            <>
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>
            </>
          );
        })}
        <Total course={course} />
      </>
    );
  });

  return (
    <>
      <ul>{listCourses}</ul>
    </>
  );
};

export default Course;
