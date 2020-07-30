import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const divideOneByX = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  isEqualSignUsed
) => {
  if (convertStringToNumber(bigDisplayString) !== 0) {
    if (!isEqualSignUsed) {
      return {
        bigString: convertNumberToString(1/convertStringToNumber(bigDisplayString)),
        smallArray: [...smallDisplayValuesArrayOfStrings, convertNumberToString(1/convertStringToNumber(bigDisplayString))],
        error: false,
      };
    } else {
        return {
            bigString: convertNumberToString(1/convertStringToNumber(bigDisplayString)),
            smallArray: [convertNumberToString(1/convertStringToNumber(bigDisplayString))],
            error: false,
          };
    }
  } else {
    return {
      bigString: "Do not divide by zero",
      smallArray: [...smallDisplayValuesArrayOfStrings, "1/(0)"],
      error: true,
    };
  }
};
