const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let chosenOption = Math.floor(Math.random() * options.length);
  return options[chosenOption];  
}

function playRound(playerSelection, computerSelection) {
  let playerOption = playerSelection.toLowerCase();
  if(playerOption == 'rock') {
    if(computerSelection == 'rock') {
      return 'tie';
    }
    else if(computerSelection == 'paper') {
      return 'loss';
    }
    else if(computerSelection == 'scissors') {
      return 'win';
    }
  }
  else if(playerOption == 'paper') {
    if(computerSelection == 'paper') {
      return 'tie';
    }
    else if(computerSelection == 'scissors') {
      return 'loss';
    }
    else if(computerSelection == 'Rock') {
      return 'win';
    }        
  }
  else if(playerOption == 'scissors') {
    if(computerSelection == 'scissors') {
      return 'tie';
    }
    else if(computerSelection == 'rock') {
      return 'loss';
    }
    else if(computerSelection == 'paper') {
      return 'win';
    }
  }
  else {
    return 'nil';
  }
}

function game() {
  
  let playerScore = 0;
  let computerScore = 0;
  
  while(playerScore < 3 && computerScore < 3) {

    let player = prompt("Choose rock, paper, or scissors");
    let computer = getComputerChoice();
    let result = playRound(player, computer);

    player = player.charAt(0).toUpperCase() + player.substring(1).toLowerCase();
    
    if(result == 'win') {
      console.log('You win the round! ' + player + ' beats ' + computer + '!');
      playerScore++;
      console.log('Player: ' + playerScore);
      console.log('Computer: ' + computerScore);
    }
    else if(result == 'loss') {
      computerScore++;
      console.log('You lose the round! ' + player + ' loses to ' + computer + '!');
      console.log('Player: ' + playerScore);
      console.log('Computer: ' + computerScore);
    }
    else if(result == 'tie') {
      console.log('Both sides sent ' + player);
      console.log('Player: ' + playerScore);
      console.log('Computer: ' + computerScore);
    }
    else if(result == 'nil') {
      console.log('Please input rock, paper, or scissors');
    }
  }

  if(playerScore > computerScore) {
    console.log('You win!');
  }
  else {
    console.log('You lose!');
  }
}
game();