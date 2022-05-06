const calculation = (numOne, operator, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unsupported operator - ${operator}`);
  }
};

export default calculation;
