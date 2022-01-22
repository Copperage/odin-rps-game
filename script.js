const playerChoice = prompt("Choose Rock, Paper or Scissors!")
const randomChoice = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

function computerChoice() {
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
}

function rpsRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === "rock" && computerChoice === "Paper"
        || playerChoice.toLowerCase() === "paper" && computerChoice === "Scissors"
        || playerChoice.toLowerCase() === "scissors" && computerChoice === "Rock") {
            return "You Lost!"
            computerScore++;
            gameRound++;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "Scissors"
    || playerChoice.toLowerCase() === "paper" && computerChoice === "Rock"
    || playerChoice.toLowerCase() === "scissors" && computerChoice === "Paper") {
        return "You win!"
        playerScore++;
        gameRound++;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "Rock"
    || playerChoice.toLowerCase() === "paper" && computerChoice === "Paper"
    || playerChoice.toLowerCase() === "scissors" && computerChoice === "Scissors") {
        return "Draw!"
        gameRound++;
    } else {
        return "That isn't a real answer!"
    }
};

function game() {
    let player = playerChoice;
    let computer = computerChoice();

    rpsRound(player, computer);

    if(gameRound === 5 && playerScore > computerScore) {
        return "You won the game!"
    } else if (gameRound === 5 && computerScore > playerScore) {
        return "You lost the game! Better luck next time!"
    } else {
        rpsRound(playerChoice, computerChoice);
    }
};

console.log("You chose: " + playerChoice);
console.log("The computer chose: " + computerChoice());
console.log(rpsRound(playerChoice, computerChoice()));

/*
    Set two variables, player and cpu
    make the player choose a choice in prompt
    make the cpu choose a random choice
    compare the two
    if player wins log you win
    if cpu wins log you lose
    if tie then log draw
*/