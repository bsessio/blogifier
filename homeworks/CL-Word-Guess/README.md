#COMMAND LINE WORD GUESS

##Overview

This game offers a challenging game of Hangman (without the cool stick figure). You are given 10 guesses (not counting correct guesses) to solve any word.

##Instructions
Opening it, you just need to run ```node index.js``` to get going. This will provide you with a start prompt, allowing you to choose whether or not you want to play!

If you do decide to play, it will prompt you to choose a letter. That provides three possibilities:

* Correct Guess. This will let you guess again until you win!
* Incorrect Guess. This will reduce your guesses by 1, and let you guess again, until you run out of guesses and lose.
* Repeated Guess. This will notify you that you've already answered this guess, and will prompt for a new guess.

If you have 0 guesses remaining, you lose the game. If you solve the word, you win and start a new game!

##Package Dependencies

###Custom Dependencies
* Letter.js is a dependency used by Word.js and Index.js, and constructs useable secret letters.
* Word.js is a dependency used by Index.js, and constructs words that are arrays of secret letters.

###Standard Dependencies
* random-words is an NPM package that provides a broad array of random words for us to use.
* inquirer is an NPM package that manages a prompt system for our game handling.
* is-letter is an NPM package that verifies if a letter is being input, or any other key.

## Authors

* **Bowie Sessions** - *Initial work* 

## Acknowledgments

* Thanks to Lynn for her assistance
* Thanks to Joe, JR, and Rory for their hard work and advice
