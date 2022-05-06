import creatingProgression from "../function/progression.js";
import brainGame from "../index.js";

const rules = 'What number is missing in the progression?';

const comparisonOperators = () => {
  const [question, answer] = creatingProgression();
  return [question, answer];
}

const gameProgression = () => brainGame(rules, comparisonOperators);

export default gameProgression;
