const getIntegerDivisor = (num) => {
  let divisor = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }

  return divisor;
}

export default getIntegerDivisor;