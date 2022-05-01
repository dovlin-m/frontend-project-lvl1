import readlineSync from "readline-sync";
import evenParity from "./even-parity.js";
import randomInteger from "./number-random.js";

const game = () => {
  const answer = readlineSync.question('Your answer: ');
  const number = randomInteger(1, 100);
  const evPar = evenParity(number);

  if (answer === evPar) {
    console.log('Correct');
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let\'s try again, ${name}`);
  }
}

export default game;