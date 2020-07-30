import { convertStringToNumber } from "./convertStringToNumber";

export const calculateBasicOperations = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  operation,
  isError,
  isEqualSignUsed,
  lastNumberAndOperationString,
  result,
  isSignChanged
) => {
  if (isError) {
    return {
      error: true,
      array: [],
    };
  } else {
    if (isEqualSignUsed) {
      if (operation === "=") {
        //  =
        return {
          error: false,
          array: [
            bigDisplayString,
            ...lastNumberAndOperationString.split(" "),
            operation,
          ],
        };
      } else {
        //  +, -, *, /
        return {
          error: false,
          array: [
            bigDisplayString.slice(-1) !== ","
              ? bigDisplayString
              : bigDisplayString + "0",
            operation,
          ],
        };
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
            return {
              error: false,
              array: [bigDisplayString, operation],
            };
          }
          return {
            error: false,
            array: [...smallDisplayValuesArrayOfStrings, operation],
          };
        } else if (operation !== "=") {
          //  +, -, *, /
          return {
            error: false,
            array: smallDisplayValuesArrayOfStrings.map((element, index) =>
              index !== smallDisplayValuesArrayOfStrings.length - 1
                ? element
                : operation
            ),
          };
        } else {
          //  =
          return {
            error: false,
            array: [
              ...smallDisplayValuesArrayOfStrings,
              bigDisplayString,
              operation,
            ],
          };
        }
      } else {
        //  !result
        return {
          error: false,
          array: [
            ...smallDisplayValuesArrayOfStrings,
            bigDisplayString.slice(-1) !== ","
              ? bigDisplayString
              : bigDisplayString + "0",
            operation,
          ],
        };
      }
    }
  }
};
