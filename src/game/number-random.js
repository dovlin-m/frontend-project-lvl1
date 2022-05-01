function randomInteger(min, max) {
  let random = min + Math.random() * (max - min);
  return Math.floor(random);
}

export default randomInteger;