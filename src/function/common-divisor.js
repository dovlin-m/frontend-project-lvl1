/* eslint-disable-next-line */

const commonDivisors = (divOne, divTwo) => {
  const res = [];

  divOne.forEach((item) => {
    divTwo.forEach((elem) => {
      if (item === elem) {
        res.push(item);
      }
    });
  });

  return res;
};

export default commonDivisors;
