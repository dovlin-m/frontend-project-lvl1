import readlineSync from 'readline-sync';

const brainGame = (rules, comparisonOperators) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(`${rules}`);

  for (let i = 1; i < 4; i += 1) {
    const [question, answer] = comparisonOperators();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct');
      if (i === 3) {
        console.log(`Congratulations,  ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default brainGame;
