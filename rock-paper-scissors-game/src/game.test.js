import { strict as assert } from 'assert';
import { describe, it } from 'node:test';
import { Game } from './game.js';

describe('Game', () => {
  it('should validate player choices correctly', () => {
    const game = new Game();
    assert.equal(game.isValidChoice('rock'), true);
    assert.equal(game.isValidChoice('PAPER'), true);
    assert.equal(game.isValidChoice('scissors'), true);
    assert.equal(game.isValidChoice('invalid'), false);
  });

  it('should determine winner correctly', () => {
    const game = new Game();
    assert.equal(game.determineWinner('rock', 'scissors'), 'player');
    assert.equal(game.determineWinner('rock', 'paper'), 'computer');
    assert.equal(game.determineWinner('rock', 'rock'), 'tie');
  });
});