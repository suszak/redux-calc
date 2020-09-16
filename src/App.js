import React from "react";
import "./App.scss";
import Keyboard from "./containers/keyboard/keyboard";
import Display from "./containers/display/display";

function App() {
  return (
    <div className="App">
      <Display />
      <Keyboard />
    </div>
  );
}

export default App;