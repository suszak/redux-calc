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
    mainNumber: "0",
    historyArray: [],
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
    case "mainNumberChanged":
      return {
        ...state,
        mainNumber: state.isError
          ? "" + action.payload.number
          : verifyNumberOnChange(state, action.payload.number),

        historyArray: state.isError
          ? []
          : !state.isEqualSignUsed
          ? state.historyArray
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
    case "mainNumberCleared":
      return {
        ...state,
        mainNumber: "0",
        historyArray:
          state.isError || state.isEqualSignUsed ? [] : state.historyArray,
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
        mainNumber: "0",
        historyArray: [],
        lastNumberAndOperationString: "",
        result: false,
        isEqualSignUsed: false,
        isError: false,
        isSignChanged: false,
      };

    //  +, -, *, /, = --- done
    case "operationDone":
      const newSmallDisplayValuesObjectArrayWithError = createNewSmallDisplayObject(
        state,
        action.payload.operation
      );

      const calculatedResultAndErrorObject = calculateResult(
        newSmallDisplayValuesObjectArrayWithError
      );

      return {
        ...state,
        mainNumber: calculatedResultAndErrorObject.string,
        historyArray: newSmallDisplayValuesObjectArrayWithError,
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
      const calculatedPowerObject = calculatePower(state);

      return {
        ...state,
        mainNumber: calculatedPowerObject.bigString,
        historyArray: calculatedPowerObject.smallArray,
      };

    //  sqrt --- done
    case "squareRootCalculated":
      const calculatedSquareRootObject = calculateSquareRoot(state);

      return {
        ...state,
        mainNumber: calculatedSquareRootObject.bigString,
        historyArray: calculatedSquareRootObject.smallArray,
        isError: calculatedSquareRootObject.error,
      };

    //  1/x --- done
    case "oneByXDivided":
      const oneByXDividedObject = divideOneByX(state);
      return {
        ...state,
        mainNumber: oneByXDividedObject.bigString,
        historyArray: oneByXDividedObject.smallArray,
        isError: oneByXDividedObject.error,
      };

    //  % --- done
    case "percentCalculated":
      const percentCalculatedObject = calculatePercent(state);
      return {
        ...state,
        mainNumber: percentCalculatedObject.bigString,
        historyArray: percentCalculatedObject.smallArray,
      };

    //  backspace --- done
    case "lastCharacterDeleted":
      return {
        ...state,
        mainNumber: state.isError
          ? "0"
          : deleteLastCharacter.deleteLastCharacterFromBigDisplay(state),
        historyArray: state.isError
          ? []
          : deleteLastCharacter.deleteHistory(state),
        lastNumberAndOperationString: state.isError
          ? ""
          : state.lastNumberAndOperationString,
        isError: false,
        isSignChanged: false,
      };

    // +/- --- done
    case "signChanged":
      const signChangedObject = changeSign(state);
      return {
        ...state,
        mainNumber: signChangedObject.bigString,
        historyArray:
          signChangedObject.smallArray !== null
            ? signChangedObject.smallArray
            : state.historyArray,
        isSignChanged: signChangedObject.isSignChanged,
      };

    default:
      return state;
  }
}
