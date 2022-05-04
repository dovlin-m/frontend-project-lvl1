function randomInteger(min, max) {
  const random = min + Math.random() * (max - min);
  return Math.floor(random);
}

export default randomInteger;
