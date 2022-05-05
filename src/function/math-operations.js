import numberRandom from "./number-random.js";

const mathOperations = () => {
  const operation = ['+', '-', '*'];

  return operation[numberRandom(0, 3)];
}

export default mathOperations;