export const deleteLastCharacterFromBigDisplay = ({ mainNumber, result }) => {
  if (!result) {
    if (mainNumber.length > 1) {
      return mainNumber.slice(0, -1);
    } else {
      return "0";
    }
  } else {
    return mainNumber;
  }
};

export const deleteHistory = ({ historyArray, isEqualSignUsed }) => {
  if (isEqualSignUsed) {
    return [];
  } else {
    return historyArray;
  }
};
