import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const divideOneByX = ({ historyArray, mainNumber, isEqualSignUsed }) => {
  if (convertStringToNumber(mainNumber) !== 0) {
    if (!isEqualSignUsed) {
      return {
        bigString: convertNumberToString(1 / convertStringToNumber(mainNumber)),
        smallArray: [
          ...historyArray,
          convertNumberToString(1 / convertStringToNumber(mainNumber)),
        ],
        error: false,
      };
    } else {
      return {
        bigString: convertNumberToString(1 / convertStringToNumber(mainNumber)),
        smallArray: [
          convertNumberToString(1 / convertStringToNumber(mainNumber)),
        ],
        error: false,
      };
    }
  } else {
    return {
      bigString: "Do not divide by zero",
      smallArray: [...historyArray, "1/(0)"],
      error: true,
    };
  }
};
