export const deleteLastCharacterFromBigDisplay = (bigDisplayString, result) => {
  if (!result) {
    if (bigDisplayString.length > 1) {
      return bigDisplayString.slice(0, -1);
    } else {
      return "0";
    }
  } else {
    return bigDisplayString;
  }
};

export const deleteSmallDisplay = (
  smallDisplayArray,
  isEqualSignUsed
) => {
  if (isEqualSignUsed) {
    return [];
  } else {
    return smallDisplayArray;
  }
};
