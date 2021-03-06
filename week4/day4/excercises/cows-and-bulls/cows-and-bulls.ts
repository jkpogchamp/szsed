// Cows and Bulls
// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). 
// The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, 
// they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.” 
// If the player types a number that does not exist, that quess will not have any result.

// Example: If the number to be found is "7624" and the player types "7296", the result is: "1 cow, 2 bull".

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested

'use strict'

import guessEvaluator from './guessEvaluator'

export default class CowsAndBulls {
    private targetNumber: number;
    private gameState: string;
    private counter: number;

    constructor() {
        this.targetNumber = (Math.floor(Math.random() * 9) + 1) * 1000 + Math.floor(Math.random() * 10) * 100 + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        this.gameState = 'playing';
        this.counter = 0;
    }

    getTarget(): number {
        return this.targetNumber;
    }

    getGameState(): string {
        return this.gameState;
    }

    getCounter(): number {
        return this.counter
    }

    setTarget(input: number) {
        this.targetNumber = input;
    }

    guess(input: number): string {
        if (this.gameState == 'finished') {
            return 'game over';
        }
        else {
            this.counter++
            let result: string = guessEvaluator(input, this.targetNumber);
            if (result == '4 cow(s)') {
                this.gameState = 'finished';
            }
            return result;
        }
    }
}