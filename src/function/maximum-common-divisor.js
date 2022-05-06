/* eslint-disable-next-line */

const greatestCommonDivisor = (divisors) => {
  let max = divisors[0];

  divisors.forEach((elem) => {
    if (max < elem) {
      max = elem;
    }
  });

  return String(max);
};

export default greatestCommonDivisor;
