export const verifyNumberOnChange = (
  bigDisplayString,
  result,
  isEqualSignUsed,
  newNumber
) => {
  if ((bigDisplayString.length < 17 && bigDisplayString.indexOf(",") !== -1) || (bigDisplayString.length < 16 && bigDisplayString.indexOf(",") === -1) || result) {
    if (isEqualSignUsed || result) {
      //  clear big display
      if (newNumber === ",") {
        return "0,";
      }
      return "" + newNumber;
    } else {
      //  add next sign
      if (bigDisplayString.indexOf(",") !== -1 && newNumber === ",")
        return bigDisplayString;
      if (bigDisplayString === "0") {
        if (newNumber === ",") {
          return "0,";
        } else {
          return "" + newNumber;
        }
      }
      return bigDisplayString + newNumber;
    }
  } else {
    //  Cannot be longer
    return bigDisplayString;
  }
};
