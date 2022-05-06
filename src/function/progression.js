import numberRandom from "./number-random.js";

const creatingProgression = () => {
  let arr = [];
  const length = numberRandom(5, 11);
  let progression = numberRandom(1, 30);
  arr.push(progression);
  let dif = numberRandom(1,5);
  const shadow = numberRandom(1, length + 1);

  for (let i = 1; i < length; i += 1) {
    progression += dif;
    arr.push(progression);
  }

  const answer = arr[shadow];
  arr[shadow] = '..';
  let question = '';

  for (let i = 0; i < arr.length; i += 1) {
    question += arr[i] + ' ';
  }

  return [question, answer.toString()];
}

export default creatingProgression;