import React from "react";

const Total = (props) => {
  let score = 0;
  props.course.parts.map((part) => {
    score += part.exercises;
  });
  return <div>A mount of exercises are {score}</div>;
};

export default Total;
