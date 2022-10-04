const game = () => {
	let playerSelection = 0;
	let computerSelection = 0;
	let moves = 0;

	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				
				winner(this.innerText,computerChoice)
				
				
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}


	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerSelectionBoard = document.querySelector('.p-count');
		const computerSelectionBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = "It's a Draw!"
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = "You Lose! Paper beats Rock";
				computerSelection++;
				computerSelectionBoard.textContent = computerSelection;

			}else{
				result.textContent = "You Win! Rock beats Scissors"
				playerSelection++;
				playerSelectionBoard.textContent = playerSelection;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = "You Lose! Rock beats Scissors";
				computerSelection++;
				computerSelectionBoard.textContent = computerSelection;
			}else{
				result.textContent = "You Win! Scissors beats Paper";
				playerSelection++;
				playerSelectionBoard.textContent = playerSelection;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = "You Lose! Scissors beats Paper";
				computerSelection++;
				computerSelectionBoard.textContent = computerSelection;

			}else{
				result.textContent = "You Win! Papper beats Rock";
				playerSelection++;
				playerSelectionBoard.textContent = playerSelection;
			}
		}
	}

	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.restart');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerSelection > computerSelection){
			result.style.fontSize = '25px';
			result.innerText = 'You Won The Game'
			result.style.color = 'blue';
		}
		else if(playerSelection < computerSelection){
			result.style.fontSize = '25px';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '25px';
			result.innerText = "It's a Draw!";
			result.style.color = 'white'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}



	playGame();
	
}


game();
