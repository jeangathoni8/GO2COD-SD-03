import { createInterface } from 'node:readline/promises';
import { Game } from './game.js';
import { displayWelcomeMessage, displayGameRules } from './ui.js';
import process from 'node:process';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  displayWelcomeMessage();
  displayGameRules();
  
  const game = new Game();
  
  while (true) {
    const choice = await readline.question('\nEnter your choice (rock/paper/scissors) or "quit" to exit: ');
    
    if (choice.toLowerCase() === 'quit') {
      console.log('\nFinal Scores:');
      game.displayScores();
      console.log('\nThanks for playing!');
      break;
    }
    
    if (game.isValidChoice(choice)) {
      game.playRound(choice);
      game.displayScores();
    } else {
      console.log('Invalid choice! Please choose rock, paper, or scissors.');
    }
  }
  
  readline.close();
}

main().catch(console.error);