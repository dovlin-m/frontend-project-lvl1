import numberRandom from '../function/number-random.js';
import mathOperations from '../function/math-operations.js';
import brainGame from '../index.js';
import calculation from '../function/calculation.js';

const rules = 'What is the result of the expression?';

const comparisonOperators = () => {
  const randOne = numberRandom(1, 100);
  const randTwo = numberRandom(1, 100);
  const operation = mathOperations();
  const question = (`${randOne} ${operation} ${randTwo}`);
  const answer = String(calculation(randOne, operation, randTwo));
  return [question, answer];
};

const gameCalc = () => brainGame(rules, comparisonOperators);

export default gameCalc;
