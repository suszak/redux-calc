import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const calculatePower = (
  smallDisplayValuesArrayOfStrings,
  bigDisplayString,
  isEqualSignUsed,
  isSignChanged
) => {
  if (isEqualSignUsed || smallDisplayValuesArrayOfStrings.length < 1) {
    //  "=" used or empty array
    return {
      bigString: convertNumberToString(
        Math.pow(convertStringToNumber(bigDisplayString), 2)
      ),
      smallArray: [
        convertNumberToString(
          Math.pow(convertStringToNumber(bigDisplayString), 2)
        ),
      ],
    };
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
      return {
        bigString: convertNumberToString(
          Math.pow(convertStringToNumber(bigDisplayString), 2)
        ),
        smallArray: [
          ...smallDisplayValuesArrayOfStrings,
          convertNumberToString(
            Math.pow(convertStringToNumber(bigDisplayString), 2)
          ),
        ],
      };
    } else {
      //  last character is number
      if (isSignChanged) {
        return {
          bigString: convertNumberToString(
            Math.pow(convertStringToNumber(bigDisplayString), 2)
          ),

          smallArray: [
            convertNumberToString(
              Math.pow(convertStringToNumber(bigDisplayString), 2)
            ),
          ],
        };
      } else {
        const temp = smallDisplayValuesArrayOfStrings.map((element, index) =>
          index !== smallDisplayValuesArrayOfStrings.length - 1
            ? element
            : convertNumberToString(Math.pow(convertStringToNumber(element), 2))
        );
        return {
          bigString: temp.slice(-1).join(""),
          smallArray: temp,
        };
      }
    }
  }
};
