// DOM selection and init
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let cacheDom = '';

rock.addEventListener('click', () => game('Rock'));
paper.addEventListener('click', () => game('Paper'));
scissors.addEventListener('click', () => game('Scissors'));

// Computer randomisation
function computerChoice() {
	const randomChoice = ['Rock', 'Paper', 'Scissors'];
	return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

// RPS Round
function rpsRound(playerChoice, computerChoice) {
	console.log(`You selected ${playerChoice}`);
	console.log(`Computer selected ${computerChoice}`);

	if (
		(playerChoice === 'Rock' && computerChoice === 'Paper') ||
		(playerChoice === 'Paper' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Rock')
	) {
		document.querySelector('.decisionText').textContent = 'You lose!';
		computerScore++;
		gameRound++;
	} else if (
		(playerChoice === 'Rock' && computerChoice === 'Scissors') ||
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		document.querySelector('.decisionText').textContent = 'You win!';
		playerScore++;
		gameRound++;
	} else if (
		(playerChoice === 'Rock' && computerChoice === 'Rock') ||
		(playerChoice === 'Paper' && computerChoice === 'Paper') ||
		(playerChoice === 'Scissors' && computerChoice === 'Scissors')
	) {
		document.querySelector('.decisionText').textContent = 'Draw!';
		gameRound++;
	}
}

// Game
function game(playerChoice) {
	let player = playerChoice;
	let computer = computerChoice();

	rpsRound(player, computer);
	document.querySelector('.round').textContent = 'Round' + ' ' + gameRound;

	if (gameRound === 5) {
		document.querySelector('.rps').style.visibility = 'hidden';
		document.querySelector('.restart').style =
			'font-size: calc(150px + 1.1vw);';
		document.querySelector('.decisionText').style.visibility = 'hidden';
	}

	if (gameRound === 5 && playerScore > computerScore) {
		document.querySelector('.winner').textContent = 'You won the game!';
	} else if (gameRound === 5 && computerScore > playerScore) {
		document.querySelector('.winner').textContent = 'You lost the game!';
	} else if (gameRound === 5 && computerScore === playerScore) {
		document.querySelector('.winner').textContent = "It's a draw!";
	}
}

// Reset button
document.querySelector('.restart').addEventListener('click', () => {
	playerScore = 0;
	computerScore = 0;
	gameRound = 0;
	document.querySelector('.decisionText').textContent = '';
	document.querySelector('.round').textContent = 'Round 0';
	document.querySelector('.rps').style.visibility = 'visible';
	document.querySelector('.restart').style = 'font-size: calc(40px + 1.1vw);';
	document.querySelector('.decisionText').style.visibility = 'visible';
	document.querySelector('.winner').textContent = '';
});
