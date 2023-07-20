// options that will be chosen by the computer
const options = ['Rock', 'Paper', 'Scissors'];

// scores of each player
let playerScore = 0;
let computerScore = 0;

// creating reset button
let resetButton;

// gives computer a choice
function getComputerChoice() {
  let chosenOption = Math.floor(Math.random() * options.length);
  return options[chosenOption];  
}

// plays a round, updates scores
function playRound(playerSelection, computerSelection) {
  if(playerSelection == 'Rock') {
    if(computerSelection == 'Rock') {
      return 'Both sides sent ' + playerSelection + '.';
    }
    else if(computerSelection == 'Paper') {
      computerScore++;
      return 'You lose the round! ' + playerSelection + ' loses to ' + computerSelection + '!';
    }
    else if(computerSelection == 'Scissors') {
      playerScore++;
      return 'You win the round! ' + playerSelection + ' beats ' + computerSelection + '!';
    }
  }
  else if(playerSelection == 'Paper') {
    if(computerSelection == 'Paper') {
      return 'Both sides sent ' + playerSelection + '.';
    }
    else if(computerSelection == 'Scissors') {
      computerScore++;
      return 'You lose the round! ' + playerSelection + ' loses to ' + computerSelection + '!';
    }
    else if(computerSelection == 'Rock') {
      playerScore++;
      return 'You win the round! ' + playerSelection + ' beats ' + computerSelection + '!';
    }        
  }
  else if(playerSelection == 'Scissors') {
    if(computerSelection == 'Scissors') {
      return 'Both sides sent ' + playerSelection + '.';
    }
    else if(computerSelection == 'Rock') {
      computerScore++;
      return 'You lose the round! ' + playerSelection + ' loses to ' + computerSelection + '!';
    }
    else if(computerSelection == 'Paper') {
      playerScore++;
      return 'You win the round! ' + playerSelection + ' beats ' + computerSelection + '!';
    }
  }
}

// Identifies the buttons, and adds an event that causes playRound to occur with 
// a random computer choice
const buttons = document.querySelectorAll('.options');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const playerOption = this.id;
    const computerOption = getComputerChoice();
    let num = 0;

    result.textContent = playRound(playerOption, computerOption);
    one.textContent = 'Player: ' + playerOption;
    two.textContent = 'Computer: ' + computerOption;
    score.textContent = playerScore + ' - ' + computerScore;
    checkScores();
  });
});

function checkScores() {
  if(playerScore > 2 || computerScore > 2) {
    endGame();
  }
}


function endGame() {
  if(playerScore == 3) {
    result.textContent = 'Congratulations! You won!';
  }
  else {
    result.textContent = 'Sorry, the computer seems to have bested you.';
  }

  document.querySelectorAll(".options").forEach(e => e.disabled = true);

  question.textContent = 'Would you like to play again?';

  resetButton = document.createElement('button');
  resetButton.textContent = 'YES';
  endgame.appendChild(resetButton);

  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  
  let resetAll = document.querySelectorAll('.reset');
  for(let element of resetAll) {
    element.textContent = '';
  }

  endgame.removeChild(resetButton);

  playerScore = 0;
  computerScore = 0;
  document.querySelectorAll(".options").forEach(e => e.disabled = false);
}