import React from "react";
import Part from "./Part";

const Contents = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Part part={part1} excercise={exercises1} />
      <Part part={part2} excercise={exercises2} />
      <Part part={part3} excercise={exercises3} />
    </div>
  );
};

export default Contents;
