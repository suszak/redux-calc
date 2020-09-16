import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const calculatePower = ({
  historyArray,
  mainNumber,
  isEqualSignUsed,
  isSignChanged,
}) => {
  if (isEqualSignUsed || historyArray.length < 1) {
    //  "=" used or empty array
    return {
      bigString: convertNumberToString(
        Math.pow(convertStringToNumber(mainNumber), 2)
      ),
      smallArray: [
        convertNumberToString(Math.pow(convertStringToNumber(mainNumber), 2)),
      ],
    };
  } else if (historyArray.length > 0) {
    //  it's not a empty array
    if (isNaN(convertStringToNumber(historyArray.slice(-1).join("")))) {
      //  last character isn't number
      return {
        bigString: convertNumberToString(
          Math.pow(convertStringToNumber(mainNumber), 2)
        ),
        smallArray: [
          ...historyArray,
          convertNumberToString(Math.pow(convertStringToNumber(mainNumber), 2)),
        ],
      };
    } else {
      //  last character is number
      if (isSignChanged) {
        return {
          bigString: convertNumberToString(
            Math.pow(convertStringToNumber(mainNumber), 2)
          ),

          smallArray: [
            convertNumberToString(
              Math.pow(convertStringToNumber(mainNumber), 2)
            ),
          ],
        };
      } else {
        const temp = historyArray.map((element, index) =>
          index !== historyArray.length - 1
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
