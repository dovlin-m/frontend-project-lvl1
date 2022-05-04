import readlineSync from 'readline-sync';
import evenParity from './even-parity.js';
import numberRandom from './number-random.js';

const askEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 1; i < 4; i += 1) {
    const rand = numberRandom(1, 100);
    const evPar = evenParity(rand);
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === evPar) {
      console.log('Correct');
      if (i === 3) {
        console.log(`Congratulations,  ${name}!`);
      }
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default askEven;
