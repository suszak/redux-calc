import { convertStringToNumber } from "./convertStringToNumber";

export const createNewSmallDisplayObject = (
  {
    historyArray,
    mainNumber,
    result,
    isEqualSignUsed,
    lastNumberAndOperationString,
    isError,
    isSignChanged,
  },
  operation
) => {
  if (isError) {
    return [];
  } else {
    // !isError
    if (isEqualSignUsed) {
      if (operation === "=") {
        //  =
        if (historyArray.length === 2) {
          return historyArray;
        } else {
          return [
            mainNumber,
            ...lastNumberAndOperationString.split(" "),
            operation,
          ];
        }
      } else {
        //  +, -, *, /
        return [
          mainNumber.slice(-1) !== "," ? mainNumber : mainNumber + "0",
          operation,
        ];
      }
    } else {
      //  !isEqualSignUsed
      if (result) {
        if (!isNaN(convertStringToNumber(historyArray.slice(-1).join("")))) {
          //  number
          if (isSignChanged) {
            return [mainNumber, operation];
          }
          return [...historyArray, operation];
        } else if (operation !== "=") {
          //  +, -, *, /
          return historyArray.map((element, index) =>
            index !== historyArray.length - 1 ? element : operation
          );
        } else {
          //  =
          return [...historyArray, mainNumber, operation];
        }
      } else {
        //  !result
        if (!isNaN(convertStringToNumber(historyArray.slice(-1).join("")))) {
          return [...historyArray, operation];
        } else {
          return [
            ...historyArray,
            mainNumber.slice(-1) !== "," ? mainNumber : mainNumber + "0",
            operation,
          ];
        }
      }
    }
  }
};
