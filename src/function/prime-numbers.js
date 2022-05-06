const primeNumbers = (num) => {
  let answer = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    } else {
      answer = 'yes';
    }
  }

  return answer;
};

export default primeNumbers;
