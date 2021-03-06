/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./keyboard.scss";
import { useDispatch } from "react-redux";
import Button from "../../component/button/button";
import * as calculatorActions from "../../actions/calculatorActions";
import { keyboard } from "./keyboardArray";

const Keyboard = () => {
  const dispatch = useDispatch();

  const callBasicFunctionsOnKeyPress = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      //    1
      case 49:
        dispatch(calculatorActions.mainNumberChanged(1));
        break;
      //    2
      case 50:
        dispatch(calculatorActions.mainNumberChanged(2));
        break;
      //    3
      case 51:
        dispatch(calculatorActions.mainNumberChanged(3));
        break;
      //    4
      case 52:
        dispatch(calculatorActions.mainNumberChanged(4));
        break;
      //    5
      case 53:
        dispatch(calculatorActions.mainNumberChanged(5));
        break;
      //    6
      case 54:
        dispatch(calculatorActions.mainNumberChanged(6));
        break;
      //    7
      case 55:
        dispatch(calculatorActions.mainNumberChanged(7));
        break;
      //    8
      case 56:
        dispatch(calculatorActions.mainNumberChanged(8));
        break;
      //    9
      case 57:
        dispatch(calculatorActions.mainNumberChanged(9));
        break;
      //    0
      case 48:
        dispatch(calculatorActions.mainNumberChanged(0));
        break;
      //    ,
      case 44:
        dispatch(calculatorActions.mainNumberChanged(","));
        break;
      //    +
      case 43:
        dispatch(calculatorActions.operationDone("+"));
        break;
      //    -
      case 45:
        dispatch(calculatorActions.operationDone("-"));
        break;
      //    *
      case 42:
        dispatch(calculatorActions.operationDone("×"));
        break;
      //    /
      case 47:
        dispatch(calculatorActions.operationDone("÷"));
        break;

      //    enter
      case 13:
        dispatch(calculatorActions.operationDone("="));
        break;
      //    =
      case 61:
        dispatch(calculatorActions.operationDone("="));
        break;
      //    backspace
      case 8:
        dispatch(calculatorActions.lastCharacterDeleted());
        break;
      //    esc (C)
      case 27:
        dispatch(calculatorActions.allCleared());
        break;
      //    delete (CE)
      case 46:
        dispatch(calculatorActions.mainNumberCleared());
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) =>
      callBasicFunctionsOnKeyPress(e)
    );
    return document.removeEventListener("keypress", (e) =>
      callBasicFunctionsOnKeyPress(e)
    );
  }, []);

  return (
    <section className="keyboard">
      {keyboard.map((button) => {
        return (
          <Button
            key={button.value}
            value={button.value}
            onclick={button.function}
          />
        );
      })}
    </section>
  );
};

export default Keyboard;
