import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AnimatedPages from "./components/AnimatedPages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedPages />
    </div>
  );
}

export default App;
