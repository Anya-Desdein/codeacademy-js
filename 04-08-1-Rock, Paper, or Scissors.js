

const validChoicesDict = {
    rock: true,
    paper: true,
    scissors: true,
    bomb: true,
  
  };
  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput in validChoicesDict) {
    //  console.log(userInput);
      return userInput;
    }
    console.log(`Wrong user input.`);
  };
  
  const getComputerChoice = () => {
  
   const numb = Math.floor(Math.random()*3);
  
   if(numb === 0)
   {
     return ('rock');
   }
   else if(numb === 1)
   {
     return ('paper');
   }
   else if(numb === 2)
   {
     return ('scissors');
   }
   
  };
  
  let winner;
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === `bomb`)
    {
      return(winner='you win');
    }
    else if (userChoice !== 'bomb')
    {
            if (userChoice === computerChoice)
            {
              return(winner='tie');
            }
            else 
            {
                      if(userChoice === `rock`)
                      {
                        if(computerChoice === `paper`)
                        {
                            return(winner='you loose');    
                        }
                        else
                        {
                              return(winner='you win');
                        }
                      }
  
                        if(userChoice === `paper`)
                      {
                        if(computerChoice === `scissors`)
                        {
                            return(winner='you loose');    
                        }
                        else
                        {
                              return(winner='you win');
                        }
                      }
  
                        if(userChoice === `scissors`)
                      {
                        if(computerChoice === `rock`)
                        {
                            return(winner='you loose');    
                        }
                        else
                        {
                              return(winner='you win');
                        }
                      }
              }
    }
  };
  
  
  const playGame = () => {
    const userChoice = getUserChoice(`rock`);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  
  
  
  