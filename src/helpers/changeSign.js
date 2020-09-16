import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const changeSign = ({ mainNumber, historyArray }) => {
  if (!isNaN(convertStringToNumber(historyArray.slice(-1).join("")))) {
    return {
      bigString: convertNumberToString(
        -1 * convertStringToNumber(historyArray.slice(-1).join(""))
      ),
      smallArray: historyArray.map((element, index) =>
        index !== historyArray.length - 1
          ? element
          : convertNumberToString(
              -1 * convertStringToNumber(historyArray.slice(-1).join(""))
            )
      ),
      isSignChanged: true,
    };
  } else {
    if (convertStringToNumber(mainNumber) !== 0) {
      return {
        bigString: convertNumberToString(
          -1 * convertStringToNumber(mainNumber)
        ),
        smallArray: null,
        isSignChanged: true,
      };
    } else {
      return { bigString: mainNumber, isSignChanged: false };
    }
  }
};
