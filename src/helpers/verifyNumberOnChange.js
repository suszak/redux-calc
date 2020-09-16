export const verifyNumberOnChange = (
  { mainNumber, result, isEqualSignUsed },
  newNumber
) => {
  if (
    (mainNumber.length < 17 && mainNumber.indexOf(",") !== -1) ||
    (mainNumber.length < 16 && mainNumber.indexOf(",") === -1) ||
    result
  ) {
    if (isEqualSignUsed || result) {
      //  clear big display
      if (newNumber === ",") {
        return "0,";
      }
      return "" + newNumber;
    } else {
      //  add next sign
      if (mainNumber.indexOf(",") !== -1 && newNumber === ",")
        return mainNumber;
      if (mainNumber === "0") {
        if (newNumber === ",") {
          return "0,";
        } else {
          return "" + newNumber;
        }
      }
      return mainNumber + newNumber;
    }
  } else {
    //  Cannot be longer
    return mainNumber;
  }
};
