import React from "react";
import { useSelector } from "react-redux";
import "./display.scss";
import { formatBigDisplay } from "../../helpers/formatBigDisplay";

const Display = () => {
  const calculator = useSelector((state) => state.calculator);
  const smallDisplayString = calculator.smallDisplayValuesArrayOfStrings.join(
    " "
  );

  return (
    <section className="display">
      <p className="display__small">
        {smallDisplayString.length <= 40
          ? smallDisplayString
          : "..." + smallDisplayString.slice(-40)}
      </p>
      <p className="display__big">
        {formatBigDisplay(calculator.bigDisplayString)}
      </p>
    </section>
  );
};

export default Display;
