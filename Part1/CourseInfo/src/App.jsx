import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Contents from "./Components/Contents";
import Total from "./Components/Total";
import Header from "./Components/Header";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  let total = 0;
  course.parts.map((p) => (total += p.exercises));

  return (
    <div className="App">
      {/* <Header course={course} />
      <Contents parts={parts} />
      <Total parts={total} /> */}

      <h1>{course.name}</h1>
      <div>
        {course.parts.map((part) => (
          <p>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
      <p>Number of exercises {total}</p>
    </div>
  );
}

export default App;
