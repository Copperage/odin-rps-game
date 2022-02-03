const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

function computerChoice() {
	const randomChoice = ['Rock', 'Paper', 'Scissors'];
	return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function rpsRound(playerChoice, computerChoice) {
	console.log(`You selected ${playerChoice}`);
	console.log(`Computer selected ${computerChoice}`);

	if (
		(playerChoice === 'Rock' && computerChoice === 'Paper') ||
		(playerChoice === 'Paper' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Rock')
	) {
		return 'You Lost!';
		computerScore++;
		gameRound++;
	} else if (
		(playerChoice === 'Rock' && computerChoice === 'Scissors') ||
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		return 'You win!';
		playerScore++;
		gameRound++;
	} else if (
		(playerChoice === 'Rock' && computerChoice === 'Rock') ||
		(playerChoice === 'Paper' && computerChoice === 'Paper') ||
		(playerChoice === 'Scissors' && computerChoice === 'Scissors')
	) {
		return 'Draw!';
		gameRound++;
	}
}

function game(playerChoice) {
	let player = playerChoice;
	let computer = computerChoice();

	rpsRound(player, computer);

	// if (gameRound === 5 && playerScore > computerScore) {
	// 	return 'You won the game!';
	// } else if (gameRound === 5 && computerScore > playerScore) {
	// 	return 'You lost the game! Better luck next time!';
	// }
}

rock.addEventListener('click', () => game('Rock'));
paper.addEventListener('click', () => game('Paper'));
scissors.addEventListener('click', () => game('Scissors'));

/*
    Set two variables, player and cpu
    make the player choose a choice in prompt
    make the cpu choose a random choice
    compare the two
    if player wins log you win
    if cpu wins log you lose
    if tie then log draw
*/
