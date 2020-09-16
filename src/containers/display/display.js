import React from "react";
import { useSelector } from "react-redux";
import "./display.scss";
import { formatMainNumber } from "../../helpers/formatMainNumber";

const Display = () => {
  const calculator = useSelector((state) => state.calculator);
  const historyString = calculator.historyArray.join(
    " "
  );

  return (
    <section className="display">
      <p className="display__small">
        {historyString.length <= 40
          ? historyString
          : "..." + historyString.slice(-40)}
      </p>
      <p className="display__big">
        {formatMainNumber(calculator.mainNumber)}
      </p>
    </section>
  );
};

export default Display;
