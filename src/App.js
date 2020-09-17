import React, { useEffect, useState } from "react";
import "./App.scss";
import Keyboard from "./containers/keyboard/keyboard";
import Display from "./containers/display/display";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function App() {
  const [isDark, setIsDark] = useState(true);

  const changeMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add("bright-mode");
    } else {
      document.documentElement.classList.remove("bright-mode");
    }
  }, [isDark]);

  return (
    <div className="app">
      <span className="app__brightness" onClick={changeMode}>
        {!isDark ? <Brightness2Icon /> : <Brightness7Icon />}
      </span>

      <Display />
      <Keyboard />
    </div>
  );
}

export default App;
