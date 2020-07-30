export const calculateResult = (operationsArray) => {
  if (operationsArray.length < 1) {
    return {
      error: false,
      string: "0",
    };
  } else {
    const changedSignsArray = operationsArray
      .join(" ")
      .replace(/,/g, ".")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/- -/g, "+ ")
      .split(" ");

    const arrayOfNumbers = changedSignsArray.filter(
      (element) => !isNaN(element)
    );
    const arrayOfSigns = changedSignsArray.filter((element) => isNaN(element));

    if (
      arrayOfSigns.slice(-2, -1).join("") === "/" &&
      parseFloat(arrayOfNumbers.slice(-1)) === 0
    ) {
      if (parseFloat(arrayOfNumbers.slice(-2, -1)) === 0) {
        return { error: true, string: "Undefined result" };
      } else {
        return { error: true, string: "Do not divide by zero" };
      }
    } else {
      const result =
        "" +
        arrayOfNumbers.reduce((prev, current, index) => {
          // eslint-disable-next-line no-eval
          return eval("" + prev + arrayOfSigns[index - 1] + current);
        });

      return {
        error: false,
        string: result.replace(".", ","),
      };
    }
  }
  // }
};
