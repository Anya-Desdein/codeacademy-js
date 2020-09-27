
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  const validChoicesDict = {
    rock: true,
    paper: true,
    scissors: true,
    bomb: true,
  };
  
  if (userInput in validChoicesDict) {
    return userInput;
  }

  console.log('Wrong user input.');
};

const getComputerChoice = () => {
  const roll = Math.floor(Math.random() * 3);

  const computerOptions = [
    'rock', 'paper', 'scissors'
  ];

  return computerOptions[roll];
};

const determineWinMessage = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
    return 'you win';
  }

  if (userChoice === computerChoice) {
    return 'tie';
  }

  const superior = {
    rock: 'paper',
    scissors: 'rock',
    paper: 'scissors'
  };

  if(!(userChoice in superior)) {
    throw new Error(`Unexpected user choice: ${userChoice}`);
  }

  return computerChoice === superior[userChoice] ? 'you loose' : 'you win';
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinMessage(userChoice, computerChoice));
};

playGame();
