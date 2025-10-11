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
    if ( randomChoice === 1) {
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



