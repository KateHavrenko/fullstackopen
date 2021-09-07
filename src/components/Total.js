import React from "react";

const Total = ({ course }) => {
  console.log(course.parse, "exercises");
  const total = course.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  return (
    <p>
      <b>Total of {total} exercises</b>
    </p>
  );
};

export default Total;
