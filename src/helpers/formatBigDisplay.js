export const formatBigDisplay = (bigDisplayString) => {
  return bigDisplayString.replace(/\B(?<!,\d*)(?=(\d{3})+(?!\d))/g, " ");
};
