import { useState } from 'react';
import { motion } from 'framer-motion';
import { Game } from './game';
import { GameChoice } from './components/GameChoice';
import { GameResult } from './components/GameResult';
import { ScoreBoard } from './components/ScoreBoard';

const choices = ['🪨', '📃', '✂️'];
const choiceNames = ['rock', 'paper', 'scissors'];

function App() {
  const [game] = useState(() => new Game());
  const [result, setResult] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [, forceUpdate] = useState();

  const handleChoice = (_choice, index) => {
    const computerIndex = Math.floor(Math.random() * 3);
    const computerMove = choiceNames[computerIndex];
    
    setPlayerChoice(index);
    setComputerChoice(computerIndex);
    
    const roundResult = game.determineWinner(choiceNames[index], computerMove);
    
    if (roundResult === 'player') {
      game.playerScore++;
    } else if (roundResult === 'computer') {
      game.computerScore++;
    }
    
    setResult(roundResult);
  };

  const handlePlayAgain = () => {
    setResult(null);
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  const handleResetGame = () => {
    game.resetScore();
    handlePlayAgain();
    forceUpdate({});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
      >
        Rock Paper Scissors
      </motion.h1>

      <div className="flex gap-8 mb-12">
        {choices.map((choice, index) => (
          <GameChoice
            key={choice}
            choice={choice}
            index={index}
            onClick={handleChoice}
          />
        ))}
      </div>

      {result && (
        <GameResult
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          choices={choices}
          onPlayAgain={handlePlayAgain}
          onResetGame={handleResetGame}
        />
      )}

      <ScoreBoard
        playerScore={game.playerScore}
        computerScore={game.computerScore}
      />
    </div>
  );
}

export default App;