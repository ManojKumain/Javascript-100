// Write the logic to get the computer choice

// 1. Create a new function named getComputerChoice
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors"
// 2.1 assign the string values for each variable like choice
// 2.2 generate randomNumber between 1 and 3
// 2.3 The randomNumber will match a certain choice and we will return that choice

function getComputerChoice() {

    // 1. Assign string values for each choice
    const choice1 = "rock";
    const choice2 = "paper";
    const choice3 = "scissors";

    // 2. generate randomChoice between 1 and 3
    const randomChoice = Math.floor(Math.random() * 3 + 1);

    // 3. return choice that maches the randomChoice
    if (randomChoice === 1) {
        return choice1
    } else if (randomChoice === 2) {
        return choice2
    } else {
        return choice3
    }

}


// Step 3: Write the logic to get the human choice

function getHumanChoice() {
    const humanChoice = prompt("Enter Your Choice").toLowerCase()
    return humanChoice;
}


// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;


// Step 5: Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! No one wins");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! Paper beats rock`);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! rock beats scissors`);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }

}



// Step 5: Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! No one wins");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! Paper beats rock`);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! rock beats scissors`);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection)


// Step 6: Write the logic to play the entire game
function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    console.log(`Your score is: ${humanScore}`);
    console.log(`Computer score is: ${computerScore}`);
}

playGame();