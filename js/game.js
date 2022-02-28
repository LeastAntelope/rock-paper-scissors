let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;
let roundResults;
gamePlay();

function gamePlay() {
   let playcount = 0;
      while (playcount < 5) {
      computerPlay();
      selectprompt();
      playRound(playerSelection, computerSelection);
      if (roundResults == "player") {
         playerScore = ++playerScore;
         playcount = ++playcount;
      }
      else if (roundResults == "cpu") {
         computerScore = ++computerScore;
         playcount = ++playcount;
      }
   }
   if (playerScore > computerScore) {
      alert(`congratulations! you won the game!
      Score: ${playerScore} - ${computerScore}`);
      let winrestart = prompt("do you want to try again?", "yes");
      if (winrestart == "yes") {
         computerScore = 0;
         playerScore = 0;
         gamePlay();
      }
   }
   else {
      let restartselect = prompt(`Sorry. You lost. Do you want to try again?
      Score: ${computerScore} - ${playerScore}`, "yes");
      if (restartselect == "yes") {
         computerScore = 0;
         playerScore = 0;
         gamePlay();
      }
   }
}

function computerPlay() {
    const playnumber = Math.floor(Math.random() * 100);
    if (playnumber <= 32) {
      return computerSelection = "rock";
    } 
    else if (playnumber >= 33 && playnumber <= 65) {
      return computerSelection = "paper";
    }
    else {
      return computerSelection = "scissors";
    }
}

function selectprompt() {
   let selection = prompt("Rock, Paper, or Scissors?", "rock");
   if (selection == null) {
      alert("To quit close the page.");
      selection = "rock"
      selectprompt();
   }
   selection = selection.toLowerCase();
   if (selection == "rock" || selection == "paper" || selection == "scissors") {
      return playerSelection = selection;
   } 
   else {
      alert("Sorry. That's not a valid selection.");
      selectprompt();
   }
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection == computerSelection) {
        alert("Tie Round.");
        return roundResults = "tie";
     }
     else if ((playerSelection == "rock" || computerSelection == "rock") &&
       (playerSelection == "paper" || computerSelection == "paper")) {
         if (playerSelection == "paper") {
            alert("Congratulations! Paper covers Rock!");
            return roundResults = "player";
         }
         else {
            alert("Try again. Paper covers Rock.");
            return roundResults = "cpu"
         } 
      }
      else if ((playerSelection == "rock" || computerSelection == "rock") &&
       (playerSelection == "scissors"|| computerSelection == "scissors")) {
         if (playerSelection == "rock") {
            alert("Congratulations! Rock smashes Scissors!");
            return roundResults = "player";
         }
         else {
            alert("Try again. Rock smashes Scissors.");
            return roundResults = "cpu"
         } 
      }
      else if (playerSelection == "scissors") {
            alert("Congratulations! Scissors cuts Paper!");
            return roundResults = "player";
         }
         else {
            alert("Try again. Scissors cuts Paper.");
            return roundResults = "cpu"
         } 
}