import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Contents from "./Components/Contents";
import Total from "./Components/Total";

function App() {
  const [count, setCount] = useState(0);
  const course = "Half Stack application development";

  return (
    <div className="App">
      <h1>{course}</h1>
      <Contents />
      <Total />
    </div>
  );
}

export default App;
