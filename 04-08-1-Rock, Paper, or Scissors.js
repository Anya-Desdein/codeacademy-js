
const validChoicesDict = {
  rock: true,
  paper: true,
  scissors: true,
  bomb: true,
};

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
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
  if (userChoice === 'bomb') {
    return 'you win';
  }

  if (userChoice === computerChoice) {
    return 'tie';
  } else {
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'you loose' : 'you win';
    }else if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'you loose' : 'you win';
    }else if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'you loose' : 'you win';
    }else{
      throw new Error(`Unexpected choice: ${userChoice}`);
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinMessage(userChoice, computerChoice));
};

playGame();
