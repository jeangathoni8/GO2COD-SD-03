const validMoves = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * validMoves.length);
  return validMoves[randomIndex];
}