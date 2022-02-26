//Rock-Paper-Scissor
//1. Make the cpu choose a random choice.
    //a. Generate a random number using Math.random().
    //b. Said number will be a decimal between 0 and 1. we will multiply that by 100
       //to get decimal between 0 and 99.
    //c. We will then need to round that number down to make it whole.
    //d. With our random whole number between 0 and 99 (now x),
       //we can make our conditions.
    //e. If x <= 33 choose rock.
    //f. If x >= 34 && x <= 66 choose paper.
    //g. If x >= 67 choose scissors.
    //h. Put this choice into a variable named "computerSelection".

//2. Create a function to determine the playerSelection variable.
    //a. Upon opening the page display a prompt. The prompt should say
       //"rock, paper, or scissors?".
    //b. Evaluate the input against a regular expression, as follows.
       //check if input = any variation of rock, paper, or scissors.
       //if not then return, "sorry, that's not a valid selection."
       //return only the first match, to ensure no errors.
    //c. standardize the format of this choice to the code.
    //d. place this choice in playerSelection

//3. Create a function to play a single round using (computerSelection,playerSelection).
    //a. Take both selections and see if they are equal. If so return "tie".
       //If not proceed.
    //b. 3 conditions here.
       //If playerSelection || computerSelection = "rock" &&
       //playerSelection || computerSelection = "paper". Then...
       //If playerSelection = "paper". Display
       //"Congratulations! paper covers rock!".
       //else display "Try again. paper covers rock."
    //c. Iterate this setup over the other 2 varitaions.
    //d. Put the winner into a variable and return the variable.
       
//4. This game will be played in sets of 5. With the winner winning after 3.
    //a. Create a for loop that iterates to 5 games.
    //b. At the start of this loop check the score. If either player has won three games,
       //exit the loop.
    //c. Upon exit display a prompt stating the winner,
       //and ask the user to play again with a yes or no prompt.
    //d. Display the score, and current game's winner,
       //in the next playerSelection prompt. Or in the exit prompt