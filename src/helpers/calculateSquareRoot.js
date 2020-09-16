import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const calculateSquareRoot = ({
  historyArray,
  mainNumber,
  isEqualSignUsed,
  isSignChanged,
}) => {
  if (isEqualSignUsed || historyArray.length < 1) {
    //  "=" used or empty array
    if (convertStringToNumber(mainNumber) >= 0) {
      return {
        bigString: convertNumberToString(
          Math.sqrt(convertStringToNumber(mainNumber))
        ),
        smallArray: [
          convertNumberToString(Math.sqrt(convertStringToNumber(mainNumber))),
        ],
        error: false,
      };
    } else {
      return {
        bigString: "Invalid input",
        smallArray: ["√(" + mainNumber + ")"],
        error: true,
      };
    }
  } else if (historyArray.length > 0) {
    //  it's not a empty array
    if (isNaN(convertStringToNumber(historyArray.slice(-1).join("")))) {
      //  last character isn't number
      if (convertStringToNumber(mainNumber) >= 0) {
        return {
          bigString: convertNumberToString(
            Math.sqrt(convertStringToNumber(mainNumber))
          ),
          smallArray: [
            ...historyArray,
            convertNumberToString(Math.sqrt(convertStringToNumber(mainNumber))),
          ],
          error: false,
        };
      } else {
        return {
          bigString: "Invalid input",
          smallArray: [...historyArray, "√(" + mainNumber + ")"],
          error: true,
        };
      }
    } else {
      //  last character is number
      if (isSignChanged) {
        if (convertStringToNumber(mainNumber) >= 0) {
          return {
            bigString: convertNumberToString(
              Math.sqrt(convertStringToNumber(mainNumber))
            ),

            smallArray: [
              convertNumberToString(
                Math.sqrt(convertStringToNumber(mainNumber))
              ),
            ],
            error: false,
          };
        } else {
          return {
            bigString: "Invalid input",
            smallArray: [...historyArray, "√(" + mainNumber + ")"],
            error: true,
          };
        }
      } else {
        if (convertStringToNumber(historyArray.slice(-1).join("")) >= 0) {
          const temp = historyArray.map((element, index) =>
            index !== historyArray.length - 1
              ? element
              : convertNumberToString(Math.sqrt(convertStringToNumber(element)))
          );
          return {
            bigString: temp.slice(-1).join(""),
            smallArray: temp,
            error: false,
          };
        } else {
          return {
            bigString: "Invalid input",
            smallArray: historyArray.map((element, index) =>
              index !== historyArray.length - 1 ? element : "√(" + element + ")"
            ),
            error: true,
          };
        }
      }
    }
  }
};
