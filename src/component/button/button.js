import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./button.scss";
import BackspaceIcon from '@material-ui/icons/Backspace';

const Button = ({ value, onclick }) => {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();


  const buttonsToDisableArray = [
    "%",
    "+/-",
    ",",
    "+",
    "-",
    "×",
    "÷",
    "x²",
    "√x",
    "1/x",
  ];

  return (
    <button
      className={
        isNaN(value)
          ? value !== "="
            ? calculator.isError && buttonsToDisableArray.indexOf(value) !== -1
              ? "button operation disabled"
              : "button operation"
            : "button result"
          : "button"
      }
      onClick={
        calculator.isError && buttonsToDisableArray.indexOf(value) !== -1
          ? () => {}
          : () => dispatch(onclick)
      }
    >
      {value === "⊲"?<BackspaceIcon />:value}
    </button>
  );
};

export default Button;
