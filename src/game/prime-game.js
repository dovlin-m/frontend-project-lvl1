import numberRandom from '../function/number-random.js';
import primeNumbers from '../function/prime-numbers.js';
import brainGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const comparisonOperators = () => {
  const rand = numberRandom(1, 100);
  const question = (`${rand}`);
  const answer = primeNumbers(rand);
  return [question, answer];
};

const gamePrime = () => brainGame(rules, comparisonOperators);

export default gamePrime;
