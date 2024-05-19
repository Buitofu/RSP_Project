
let computerMove;
let score = JSON.parse(
     localStorage.getItem('score')) || {//Default Operator
     wins: 0,
     losses: 0,
     ties: 0
};

/* 
if(!score){
    score = {
          wins: 0,
              losses: 0,
              ties: 0
    };
}
*/


updateScoreElement();


let result = '';


function playGame(playerMove) {
     computerMove = pickComputerMove();

     if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
               result = 'Tie';
          } else if (computerMove === 'Paper') {
               result = 'You lose';
          } else if (computerMove === 'Scissors') {
               result = 'You win';
          }
     }
     else if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
               result = 'You lose';
          } else if (computerMove === 'Paper') {
               result = 'You win';
          } else if (computerMove === 'Scissors') {
               result = 'Tie';
          }
     }
     else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
               result = 'You win';
          } else if (computerMove === 'Paper') {
               result = 'Tie';
          } else if (computerMove === 'Scissors') {
               result = 'You lose';
          }
     }

     calculateScore();
     //                alert(`You picked Paper. Computer picked ${computerMove}. ${result}
     // Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties};`);



     localStorage.setItem('score', JSON.stringify(score));
     updateScoreElement();
     updateResult(playerMove, computerMove);
}
function pickComputerMove() {
     let computerMove = '';

     const randomNumber = Math.random();
     if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
     } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
          computerMove = 'Paper';
     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'Scissors';
     }
     return computerMove;
}
function calculateScore() {
     if (result === 'You win') {
          score.wins++;
     } else if (result === 'You lose') {
          score.losses++;
     } else if (result === 'Tie') {
          score.ties++;
     }
}
function resetScore() {
     score.wins = 0;
     score.losses = 0;
     score.ties = 0;
     alert('New Game');
     localStorage.removeItem('score');
     updateScoreElement();
}
function updateScoreElement() {
     document.querySelector('.js-score')
          .innerHTML =
          `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

}
function updateResult(playerMove, computerMove) {
     document.querySelector('.js-result')
          .innerHTML = `${result}`;
     document.querySelector('.js-move')
          .innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
}
