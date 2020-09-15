import { verifyNumberOnChange } from "../helpers/verifyNumberOnChange";
import { calculateResult } from "../helpers/calculateResult";
import { createNewSmallDisplayObject } from "../helpers/createNewSmallDisplayObject";
import * as deleteLastCharacter from "../helpers/deleteLastCharacter";
import { changeSign } from "../helpers/changeSign";
import { calculatePower } from "../helpers/calculatePower";
import { calculateSquareRoot } from "../helpers/calculateSquareRoot";
import { divideOneByX } from "../helpers/divideOneByX";
import { calculatePercent } from "../helpers/calculatePercent";

export default function calculateReducer(
  state = {
    bigDisplayString: "0",
    smallDisplayValuesArrayOfStrings: [],
    lastNumberAndOperationString: "",
    result: false,
    isEqualSignUsed: false,
    isError: false,
    isSignChanged: false,
  },
  action
) {
  switch (action.type) {
    //  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "," --- done
    case "bigDisplayValueChanged":
      return {
        ...state,
        bigDisplayString: state.isError
          ? "" + action.payload.number
          : verifyNumberOnChange(
              state.bigDisplayString,
              state.result,
              state.isEqualSignUsed,
              action.payload.number
            ),

        smallDisplayValuesArrayOfStrings: state.isError
          ? []
          : !state.isEqualSignUsed
          ? state.smallDisplayValuesArrayOfStrings
          : [],
        result: false,
        isEqualSignUsed: false,
        lastNumberAndOperationString: state.isError
          ? ""
          : state.lastNumberAndOperationString,
        isError: false,
        isSignChanged: false,
      };

    //  CE --- done
    case "bigDisplayStringCleared":
      return {
        ...state,
        bigDisplayString: "0",
        smallDisplayValuesArrayOfStrings:
          state.isError || state.isEqualSignUsed
            ? []
            : state.smallDisplayValuesArrayOfStrings,
        result: false,
        isEqualSignUsed: false,
        lastNumberAndOperationString: state.isEqualSignUsed
          ? ""
          : state.lastNumberAndOperationString,
        isError: false,
        isSignChanged: false,
      };

    //  C --- done
    case "allCleared":
      return {
        ...state,
        bigDisplayString: "0",
        smallDisplayValuesArrayOfStrings: [],
        lastNumberAndOperationString: "",
        result: false,
        isEqualSignUsed: false,
        isError: false,
        isSignChanged: false,
      };

    //  +, -, *, /, = --- done
    case "operationDone":
      const newSmallDisplayValuesObjectArrayWithError = createNewSmallDisplayObject(
        state.smallDisplayValuesArrayOfStrings,
        state.bigDisplayString,
        action.payload.operation,
        state.result,
        state.isEqualSignUsed,
        state.lastNumberAndOperationString,
        state.isError,
        state.isSignChanged
      );

      const calculatedResultAndErrorObject = calculateResult(
        newSmallDisplayValuesObjectArrayWithError
      );

      return {
        ...state,
        bigDisplayString: calculatedResultAndErrorObject.string,
        smallDisplayValuesArrayOfStrings: newSmallDisplayValuesObjectArrayWithError,
        result:
          action.payload.operation === "=" && state.isError ? false : true,
        isEqualSignUsed:
          action.payload.operation === "=" && !state.isError ? true : false,
        lastNumberAndOperationString: newSmallDisplayValuesObjectArrayWithError
          .slice(-3, -1)
          .join(" "),
        isError: calculatedResultAndErrorObject.error,
        isSignChanged: false,
      };

    //  sqr --- done
    case "powerCalculated":
      const calculatedPowerObject = calculatePower(
        state.smallDisplayValuesArrayOfStrings,
        state.bigDisplayString,
        state.isEqualSignUsed,
        state.isSignChanged
      );

      return {
        ...state,
        bigDisplayString: calculatedPowerObject.bigString,
        smallDisplayValuesArrayOfStrings: calculatedPowerObject.smallArray,
      };

    //  sqrt --- done
    case "squareRootCalculated":
      const calculatedSquareRootObject = calculateSquareRoot(
        state.smallDisplayValuesArrayOfStrings,
        state.bigDisplayString,
        state.isEqualSignUsed,
        state.isSignChanged
      );

      return {
        ...state,
        bigDisplayString: calculatedSquareRootObject.bigString,
        smallDisplayValuesArrayOfStrings: calculatedSquareRootObject.smallArray,
        isError: calculatedSquareRootObject.error,
      };

    //  1/x --- done
    case "oneByXDivided":
      const oneByXDividedObject = divideOneByX(
        state.smallDisplayValuesArrayOfStrings,
        state.bigDisplayString,
        state.isEqualSignUsed
      );
      return {
        ...state,
        bigDisplayString: oneByXDividedObject.bigString,
        smallDisplayValuesArrayOfStrings: oneByXDividedObject.smallArray,
        isError: oneByXDividedObject.error,
      };

    //  % --- done
    case "percentCalculated":
      const percentCalculatedObject = calculatePercent(
        state.smallDisplayValuesArrayOfStrings,
        state.bigDisplayString,
        state.isEqualSignUsed,
        state.result
      );
      return {
        ...state,
        bigDisplayString: percentCalculatedObject.bigString,
        smallDisplayValuesArrayOfStrings: percentCalculatedObject.smallArray,
      };

    //  backspace --- done
    case "lastCharacterDeleted":
      return {
        ...state,
        bigDisplayString: state.isError
          ? "0"
          : deleteLastCharacter.deleteLastCharacterFromBigDisplay(
              state.bigDisplayString,
              state.result
            ),
        smallDisplayValuesArrayOfStrings: state.isError
          ? []
          : deleteLastCharacter.deleteSmallDisplay(
              state.smallDisplayValuesArrayOfStrings,
              state.isEqualSignUsed
            ),
        lastNumberAndOperationString: state.isError
          ? ""
          : state.lastNumberAndOperationString,
        isError: false,
        isSignChanged: false,
      };

    // +/- --- done
    case "signChanged":
      const signChangedObject = changeSign(
        state.bigDisplayString,
        state.smallDisplayValuesArrayOfStrings
      );
      return {
        ...state,
        bigDisplayString: signChangedObject.bigString,
        smallDisplayValuesArrayOfStrings:
          signChangedObject.smallArray !== null
            ? signChangedObject.smallArray
            : state.smallDisplayValuesArrayOfStrings,
        isSignChanged: signChangedObject.isSignChanged,
      };

    default:
      return state;
  }
}
