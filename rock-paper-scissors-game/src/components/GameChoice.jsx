import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function GameChoice({ choice, index, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="choice-button"
      onClick={() => onClick(choice, index)}
    >
      {choice}
    </motion.button>
  );
}

GameChoice.propTypes = {
  choice: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};