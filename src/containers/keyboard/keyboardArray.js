import * as calculatorActions from "../../actions/calculatorActions";

export const keyboard = [
  {
    value: "%",
    function: calculatorActions.percentCalculated(),
  },
  {
    value: "CE",
    function: calculatorActions.mainNumberCleared(),
  },
  {
    value: "C",
    function: calculatorActions.allCleared(),
  },
  {
    value: "⊲",
    function: calculatorActions.lastCharacterDeleted(),
  },
  {
    value: "1/x",
    function: calculatorActions.oneByXDivided(),
  },
  {
    value: "x²",
    function: calculatorActions.powerCalculated(),
  },
  {
    value: "√x",
    function: calculatorActions.squareRootCalculated(),
  },
  {
    value: "÷",
    function: calculatorActions.operationDone("÷"),
  },
  {
    value: "7",
    function: calculatorActions.mainNumberChanged(7),
  },
  {
    value: "8",
    function: calculatorActions.mainNumberChanged(8),
  },
  {
    value: "9",
    function: calculatorActions.mainNumberChanged(9),
  },
  {
    value: "×",
    function: calculatorActions.operationDone("×"),
  },
  {
    value: "4",
    function: calculatorActions.mainNumberChanged(4),
  },
  {
    value: "5",
    function: calculatorActions.mainNumberChanged(5),
  },
  {
    value: "6",
    function: calculatorActions.mainNumberChanged(6),
  },
  {
    value: "-",
    function: calculatorActions.operationDone("-"),
  },
  {
    value: "1",
    function: calculatorActions.mainNumberChanged(1),
  },
  {
    value: "2",
    function: calculatorActions.mainNumberChanged(2),
  },
  {
    value: "3",
    function: calculatorActions.mainNumberChanged(3),
  },
  {
    value: "+",
    function: calculatorActions.operationDone("+"),
  },
  {
    value: "+/-",
    function: calculatorActions.signChanged(),
  },
  {
    value: "0",
    function: calculatorActions.mainNumberChanged(0),
  },
  {
    value: ",",
    function: calculatorActions.mainNumberChanged(","),
  },
  {
    value: "=",
    function: calculatorActions.operationDone("="),
  },
];
