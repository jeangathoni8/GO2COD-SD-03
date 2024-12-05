import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function ScoreBoard({ playerScore, computerScore }) {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-xl font-semibold"
    >
      Score: You {playerScore} - {computerScore} Computer
    </motion.div>
  );
}

ScoreBoard.propTypes = {
  playerScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};