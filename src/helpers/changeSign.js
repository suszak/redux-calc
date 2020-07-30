import { convertStringToNumber } from "./convertStringToNumber";
import { convertNumberToString } from "./convertNumberToString";

export const changeSign = (
  bigDisplayString,
  smallDisplayValuesArrayOfStrings
) => {
  if (
    !isNaN(
      convertStringToNumber(smallDisplayValuesArrayOfStrings.slice(-1).join(""))
    )
  ) {
    return {
      bigString: convertNumberToString(
        -1 *
          convertStringToNumber(
            smallDisplayValuesArrayOfStrings.slice(-1).join("")
          )
      ),
      smallArray: smallDisplayValuesArrayOfStrings.map((element, index) =>
        index !== smallDisplayValuesArrayOfStrings.length - 1
          ? element
          : convertNumberToString(
              -1 *
                convertStringToNumber(
                  smallDisplayValuesArrayOfStrings.slice(-1).join("")
                )
            )
      ),
      isSignChanged: true,
    };
  } else {
    if (convertStringToNumber(bigDisplayString) !== 0) {
      return {
        bigString: convertNumberToString(
          -1 * convertStringToNumber(bigDisplayString)
        ),
        smallArray: null,
        isSignChanged: true,
      };
    } else {
      return { bigString: bigDisplayString, isSignChanged: false };
    }
  }
};
