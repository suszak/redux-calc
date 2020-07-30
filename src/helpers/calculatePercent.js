import { convertNumberToString } from "./convertNumberToString";
import { convertStringToNumber } from "./convertStringToNumber";
import { calculateResult } from "./calculateResult";

export const calculatePercent = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  isEqualSignUsed,
  result
) => {
  const bigDisplayNumber = convertStringToNumber(bigDisplayString);
  const lastFromSmallArrayNumber = convertStringToNumber(
    smallDisplayValuesArrayOfStrings.slice(-1).join("")
  );

  if (smallDisplayValuesArrayOfStrings.length < 1) {
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
        : [...smallDisplayValuesArrayOfStrings, calculatedString],
    };
  }

  const prevResult = isNaN(lastFromSmallArrayNumber)
    ? calculateResult(smallDisplayValuesArrayOfStrings.slice(0, -1)).string
    : calculateResult(smallDisplayValuesArrayOfStrings.slice(0, -2)).string;

  const calculatedString = convertNumberToString(
    convertStringToNumber(prevResult) * (bigDisplayNumber / 100)
  );

  return {
    bigString: calculatedString,
    smallArray: isNaN(lastFromSmallArrayNumber)
      ? [...smallDisplayValuesArrayOfStrings, calculatedString]
      : smallDisplayValuesArrayOfStrings.map((element, index) =>
          index !== smallDisplayValuesArrayOfStrings.length - 1
            ? element
            : calculatedString
        ),
  };
};
