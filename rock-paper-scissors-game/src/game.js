import { getComputerChoice } from './computer.js';

export class Game {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.validMoves = ['rock', 'paper', 'scissors'];
  }

  isValidChoice(choice) {
    return this.validMoves.includes(choice.toLowerCase());
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';

    const winningCombos = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

    return winningCombos[playerChoice] === computerChoice ? 'player' : 'computer';
  }

  resetScore() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(`\nYour choice: ${playerChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    const winner = this.determineWinner(playerChoice, computerChoice);

    switch (winner) {
      case 'player':
        console.log('You win this round!');
        this.playerScore++;
        break;
      case 'computer':
        console.log('Computer wins this round!');
        this.computerScore++;
        break;
      case 'tie':
        console.log("It's a tie!");
        break;
    }
  }

  displayScores() {
    console.log(`\nScores - You: ${this.playerScore} | Computer: ${this.computerScore}`);
  }
}