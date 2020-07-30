export const bigDisplayValueChanged = (number) => ({
  type: "bigDisplayValueChanged",
  payload: {
    number,
  },
});

export const bigDisplayStringCleared = () => ({
  type: "bigDisplayStringCleared",
});

export const allCleared = () => ({
  type: "allCleared",
});

export const operationDone = (operation) => ({
  type: "operationDone",
  payload: {
    operation,
  },
});

export const lastCharacterDeleted = () => ({
  type: "lastCharacterDeleted",
});

export const signChanged = () => ({
  type: "signChanged",
});

export const powerCalculated = () => ({
  type: "powerCalculated",
});

export const squareRootCalculated = () => ({
  type: "squareRootCalculated",
});

export const oneByXDivided = () => ({
  type: "oneByXDivided",
});

export const percentCalculated = () => ({
  type: "percentCalculated",
});
