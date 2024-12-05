import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function GameResult({ playerChoice, computerChoice, result, choices, onPlayAgain, onResetGame }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="mb-8 text-center"
    >
      <div className="flex gap-8 mb-4">
        <div className="score-card">
          <p className="text-lg mb-2">You chose:</p>
          <p className="text-5xl">{choices[playerChoice]}</p>
        </div>
        <div className="score-card">
          <p className="text-lg mb-2">Computer chose:</p>
          <p className="text-5xl">{choices[computerChoice]}</p>
        </div>
      </div>
      <p className="text-2xl font-semibold mb-4">
        {result === 'player' && '🎉 You win!'}
        {result === 'computer' && '💻 Computer wins!'}
        {result === 'tie' && "🤝 It's a tie!"}
      </p>
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg 
                     shadow-lg transition-colors duration-200"
          onClick={onPlayAgain}
        >
          Play Again
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg 
                     shadow-lg transition-colors duration-200"
          onClick={onResetGame}
        >
          Reset Game
        </motion.button>
      </div>
    </motion.div>
  );
}

GameResult.propTypes = {
  playerChoice: PropTypes.number.isRequired,
  computerChoice: PropTypes.number.isRequired,
  result: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlayAgain: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
};