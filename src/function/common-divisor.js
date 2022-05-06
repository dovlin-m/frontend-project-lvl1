const intersection = (divOne, divTwo) => {
  const res = [];

  for (let i = 0; i < divOne.length; i += 1) {
    for (let j = 0; i < divTwo.length; j += 1) {
      if (i === j) {
        res.push(i);
      }
    }
  }

  return res;
};

export default intersection;
