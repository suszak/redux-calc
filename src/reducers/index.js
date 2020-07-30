import calculateReducer from "./calculatorReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  calculator: calculateReducer,
});
