let currentRound = 1;
let playerScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
   button.addEventListener("click", playRound);
});
const round = document.querySelector("#round");
const roundResults = document.querySelector("#roundResults");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#cpuScore");
const gameResults = document.querySelector("#gameResults");
round.textContent = `Round ${currentRound}`;
humanScore.textContent = `player =${playerScore}`;
computerScore.textContent = `CPU =${cpuScore}`;

function computerPlay() {
   const playnumber = Math.floor(Math.random() * 100);
   if (playnumber <= 32) {
      return "rock";
   }
   else if (playnumber >= 33 && playnumber <= 65) {
      return "paper";
   }
   else {
      return "scissors";
   }
}

function playRound() {
   let playerSelection = ...
   let computerSelection = computerPlay();
   if (playerSelection == computerSelection) {
      keepScore("tie");
   }
   else if ((playerSelection == "rock" || computerSelection == "rock") &&
      (playerSelection == "paper" || computerSelection == "paper")) {
      if (playerSelection == "paper") {
         keepScore("player");
      }
      else {
         keepScore("cpu");
      }
   }
   else if ((playerSelection == "rock" || computerSelection == "rock") &&
      (playerSelection == "scissors" || computerSelection == "scissors")) {
      if (playerSelection == "rock") {
         keepScore("player");
      }
      else {
         keepScore("cpu");
      }
   }
   else if (playerSelection == "scissors") {
      keepScore("player");
   }
   else {
      keepScore("cpu");
   }
}

function keepScore(winner) {
   if (winner = "player") {
      ++playerScore;
      roundResults.textContent = "You Win!";
      humanScore.textContent = `player =${playerScore}`;
   }
   else if (winner = "cpu") {
      ++cpuScore;
      roundResults.textContent = "You Lose";
      computerScore.textContent = `CPU =${cpuScore}`;
   }
   else {
      roundResults.textContent = "Tie Round";
   }
   if (currentRound < 5) {
      ++currentRound;
      round.textContent = `Round ${currentRound}`;
   }
   else {
      if (playerScore > cpuScore) {
         gameResults.textContent = "You win the game!";
      }
      else if (cpuScore > playerScore) {
         gameResults.textContent = "You lost the game";
      }
      else {
         gameResults.textContent = "tie game"
      }
   }
}