import randomInteger from "./number-random.js";
import readlineSync from "readline-sync";
import evenParity from "./even-parity.js";

export const askEven = ( ) => {
  const number = randomInteger(1, 100);
  const evPar = evenParity(number);

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer \"yes\" if the number is even, otherwise answer \"no\"');
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === evPar) {
    console.log('Correct');
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let\'s try again, ${name}`);
  }

}

export default askEven;
