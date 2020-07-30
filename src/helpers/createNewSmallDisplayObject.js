import { convertStringToNumber } from "./convertStringToNumber";

export const createNewSmallDisplayObject = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  operation,
  result,
  isEqualSignUsed,
  lastNumberAndOperationString,
  isError,
  isSignChanged
) => {
  if (isError) {
    return [];
  } else {
    if (isEqualSignUsed) {
      if (operation === "=") {
        //  =
        return [
          bigDisplayString,
          ...lastNumberAndOperationString.split(" "),
          operation,
        ];
      } else {
        //  +, -, *, /
        return [
          bigDisplayString.slice(-1) !== ","
            ? bigDisplayString
            : bigDisplayString + "0",
          operation,
        ];
      }
    } else {
      //  !isEqualSignUsed
      if (result) {
        if (
          !isNaN(
            convertStringToNumber(
              smallDisplayValuesArrayOfStrings.slice(-1).join("")
            )
          )
        ) {
          //  number
          if (isSignChanged) {
            return [bigDisplayString, operation];
          }
          return [...smallDisplayValuesArrayOfStrings, operation];
        } else if (operation !== "=") {
          //  +, -, *, /
          return smallDisplayValuesArrayOfStrings.map((element, index) =>
            index !== smallDisplayValuesArrayOfStrings.length - 1
              ? element
              : operation
          );
        } else {
          //  =
          return [
            ...smallDisplayValuesArrayOfStrings,
            bigDisplayString,
            operation,
          ];
        }
      } else {
        //  !result
        if (
          !isNaN(
            convertStringToNumber(
              smallDisplayValuesArrayOfStrings.slice(-1).join("")
            )
          )
        ) {
          return [...smallDisplayValuesArrayOfStrings, operation];
        } else {
          return [
            ...smallDisplayValuesArrayOfStrings,
            bigDisplayString.slice(-1) !== ","
              ? bigDisplayString
              : bigDisplayString + "0",
            operation,
          ];
        }
      }
    }
  }
};
