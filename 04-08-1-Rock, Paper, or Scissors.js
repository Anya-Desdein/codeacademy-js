
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

  if (roll === 0) {
    return 'rock';
  } else if (roll === 1) {
    return 'paper';
  } else if (roll === 2) {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'you win';
  } else {
    if (userChoice === computerChoice) {
      return 'tie';
    }  else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'you loose';
        } else {
          return 'you win';
        }
      }

      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'you loose';
        } else {
          return 'you win';
        }
      }

      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'you loose';
        } else {
          return 'you win';
        }
      }
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
