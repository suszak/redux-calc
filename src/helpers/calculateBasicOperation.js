import { convertStringToNumber } from "./convertStringToNumber";

export const calculateBasicOperations = (
  historyArray,
  mainNumber,
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
            mainNumber,
            ...lastNumberAndOperationString.split(" "),
            operation,
          ],
        };
      } else {
        //  +, -, *, /
        return {
          error: false,
          array: [
            mainNumber.slice(-1) !== ","
              ? mainNumber
              : mainNumber + "0",
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
              historyArray.slice(-1).join("")
            )
          )
        ) {
          //  number
          if (isSignChanged) {
            return {
              error: false,
              array: [mainNumber, operation],
            };
          }
          return {
            error: false,
            array: [...historyArray, operation],
          };
        } else if (operation !== "=") {
          //  +, -, *, /
          return {
            error: false,
            array: historyArray.map((element, index) =>
              index !== historyArray.length - 1
                ? element
                : operation
            ),
          };
        } else {
          //  =
          return {
            error: false,
            array: [
              ...historyArray,
              mainNumber,
              operation,
            ],
          };
        }
      } else {
        //  !result
        return {
          error: false,
          array: [
            ...historyArray,
            mainNumber.slice(-1) !== ","
              ? mainNumber
              : mainNumber + "0",
            operation,
          ],
        };
      }
    }
  }
};
