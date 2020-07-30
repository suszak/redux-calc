import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const calculateSquareRoot = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  isEqualSignUsed,
  isSignChanged
) => {
  if (isEqualSignUsed || smallDisplayValuesArrayOfStrings.length < 1) {
    //  "=" used or empty array
    if (convertStringToNumber(bigDisplayString) >= 0) {
      return {
        bigString: convertNumberToString(
          Math.sqrt(convertStringToNumber(bigDisplayString))
        ),
        smallArray: [
          convertNumberToString(
            Math.sqrt(convertStringToNumber(bigDisplayString))
          ),
        ],
        error: false,
      };
    } else {
      return {
        bigString: "Invalid input",
        smallArray: ["√(" + bigDisplayString + ")"],
        error: true,
      };
    }
  } else if (smallDisplayValuesArrayOfStrings.length > 0) {
    //  it's not a empty array
    if (
      isNaN(
        convertStringToNumber(
          smallDisplayValuesArrayOfStrings.slice(-1).join("")
        )
      )
    ) {
      //  last character isn't number
      if (convertStringToNumber(bigDisplayString) >= 0) {
        return {
          bigString: convertNumberToString(
            Math.sqrt(convertStringToNumber(bigDisplayString))
          ),
          smallArray: [
            ...smallDisplayValuesArrayOfStrings,
            convertNumberToString(
              Math.sqrt(convertStringToNumber(bigDisplayString))
            ),
          ],
          error: false,
        };
      } else {
        return {
          bigString: "Invalid input",
          smallArray: [
            ...smallDisplayValuesArrayOfStrings,
            "√(" + bigDisplayString + ")",
          ],
          error: true,
        };
      }
    } else {
      //  last character is number
      if (isSignChanged) {
        if (convertStringToNumber(bigDisplayString) >= 0) {
          return {
            bigString: convertNumberToString(
              Math.sqrt(convertStringToNumber(bigDisplayString))
            ),

            smallArray: [
              convertNumberToString(
                Math.sqrt(convertStringToNumber(bigDisplayString))
              ),
            ],
            error: false,
          };
        } else {
          return {
            bigString: "Invalid input",
            smallArray: [
              ...smallDisplayValuesArrayOfStrings,
              "√(" + bigDisplayString + ")",
            ],
            error: true,
          };
        }
      } else {
        if (
          convertStringToNumber(
            smallDisplayValuesArrayOfStrings.slice(-1).join("")
          ) >= 0
        ) {
          const temp = smallDisplayValuesArrayOfStrings.map((element, index) =>
            index !== smallDisplayValuesArrayOfStrings.length - 1
              ? element
              : convertNumberToString(Math.sqrt(convertStringToNumber(element)))
          );
          return {
            bigString: temp.slice(-1),
            smallArray: temp,
            error: false,
          };
        } else {
          return {
            bigString: "Invalid input",
            smallArray: smallDisplayValuesArrayOfStrings.map((element, index) =>
              index !== smallDisplayValuesArrayOfStrings.length - 1
                ? element
                : "√(" + element + ")"
            ),
            error: true,
          };
        }
      }
    }
  }
};
