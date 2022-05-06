import numberRandom from "../function/number-random.js";
import getMaximumCommonDivisor from "../function/maximum-common-divisor.js";
import getIntegerDivisor from "../function/integer-divisor.js";
import getIntersectionOfArrays from "../function/common-divisor.js";
import brainGame from "../index.js";

const rules = 'Find the greatest common divisor of given numbers.';

const comparisonOperators = () => {
  const randOne = numberRandom(1, 100);
  const randTwo = numberRandom(1, 100);
  const question = (`${randOne} ${randTwo}`);
  const answer = getMaximumCommonDivisor(getIntersectionOfArrays(getIntegerDivisor(randOne), getIntegerDivisor(randTwo)));
  return [question, answer];
}

const gameGCD = () => brainGame(rules, comparisonOperators);

export default gameGCD;