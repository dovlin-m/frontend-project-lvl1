const maximum = (divisors) => {
  let max = divisors[0];

  for (let i = 0; i < divisors.length; i += 1) {
    if (max < i) {
      max = i;
    }
  }

  return String(max);
};

export default maximum;
