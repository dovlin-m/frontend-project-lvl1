import numberRandom from '../function/number-random.js';
import greatestCommonDivisor from '../function/maximum-common-divisor.js';
import divisors from '../function/integer-divisor.js';
import commonDivisors from '../function/common-divisor.js';
import brainGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const comparisonOperators = () => {
  const randOne = numberRandom(1, 100);
  const randTwo = numberRandom(1, 100);
  const question = (`${randOne} ${randTwo}`);
  const answer = greatestCommonDivisor(commonDivisors(divisors(randOne), divisors(randTwo)));
  return [question, answer];
};

const gameGCD = () => brainGame(rules, comparisonOperators);

export default gameGCD;
