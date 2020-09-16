import { convertNumberToString } from "./convertNumberToString";
import { convertStringToNumber } from "./convertStringToNumber";
import { calculateResult } from "./calculateResult";

export const calculatePercent = ({
  historyArray,
  mainNumber,
  isEqualSignUsed,
  result,
}) => {
  const bigDisplayNumber = convertStringToNumber(mainNumber);
  const lastFromSmallArrayNumber = convertStringToNumber(
    historyArray.slice(-1).join("")
  );

  if (historyArray.length < 1) {
    return {
      bigString: "0",
      smallArray: ["0"],
    };
  }

  if (result) {
    const calculatedString = convertNumberToString(
      bigDisplayNumber * (bigDisplayNumber / 100)
    );
    return {
      bigString: calculatedString,
      smallArray: isEqualSignUsed
        ? [calculatedString]
        : [...historyArray, calculatedString],
    };
  }

  const prevResult = isNaN(lastFromSmallArrayNumber)
    ? calculateResult(historyArray.slice(0, -1)).string
    : calculateResult(historyArray.slice(0, -2)).string;

  const calculatedString = convertNumberToString(
    convertStringToNumber(prevResult) * (bigDisplayNumber / 100)
  );

  return {
    bigString: calculatedString,
    smallArray: isNaN(lastFromSmallArrayNumber)
      ? [...historyArray, calculatedString]
      : historyArray.map((element, index) =>
          index !== historyArray.length - 1 ? element : calculatedString
        ),
  };
};
