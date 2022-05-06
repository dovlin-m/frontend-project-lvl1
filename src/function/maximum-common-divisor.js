const getMaximumCommonDivisor = (divisors) => {
  let max = divisors[0];

  for (const item of divisors) {
    if (max < item) {
      max = item;
    }
  }

  return String(max);
};

export default getMaximumCommonDivisor;
