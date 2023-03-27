import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Contents from "./Components/Contents";
import Total from "./Components/Total";
import Header from "./Components/Header";

function App() {
  const course = "Half Stack application development";

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header course={course} />
      <Contents />
      <Total />
    </div>
  );
}

export default App;
