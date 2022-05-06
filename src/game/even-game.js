import evenParity from '../function/even-parity.js';
import numberRandom from '../function/number-random.js';
import brainGame from '../index.js';

const rules = 'What is the result of the expression?';

const comparisonOperators = () => {
  const rand = numberRandom(1, 100);
  const question = (`${rand}`);
  const answer = evenParity(rand);
  return [question, answer];
};

const gameEven = () => brainGame(rules, comparisonOperators);

export default gameEven;
