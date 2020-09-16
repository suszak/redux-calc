export const formatMainNumber = (mainNumber) => {
  return mainNumber.replace(/\B(?<!,\d*)(?=(\d{3})+(?!\d))/g, " ");
};
