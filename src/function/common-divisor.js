const getIntersectionOfArrays = (divOne, divTwo) => {
  const res = [];

  for (const item of divOne) {
    for (const elm of divTwo) {
      if (item === elm) {
        res.push(item);
      }
    }
  }

  return res;
};

export default getIntersectionOfArrays;
