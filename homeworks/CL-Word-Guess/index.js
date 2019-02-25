// Required packages.
const letter          = require('./letter.js'),
      word            = require('./word.js'),
      randoCalrissian = require('random-words'),
      inquirer        = require('inquirer'),
      legit           = require('is-letter');
//   Global variables to be used or redefined later.
let entry     = process.argv[2],
    remaining = 0,
    soFar     = [];

// Game initializer.
function game() {
    console.log('\nWelcome to Word Guesser!\n')
    // Checks for start of game interest.
    inquirer.prompt([{
        name: "play",
        type: "confirm",
        message: "Would you like to play a game?"
    }]).then(answers => {
        // If interested, starts a game.
        if (answers.play) {
            newGame();
        }
        // If not interested, ends the sequence.
        else {
            console.log("Understood. The mysteries of our words shall remain locked to you.")
        }
        // Actual game initializer.
        function newGame() {
            // Redefines the guesses so far and the remaining guesses. 
            soFar = [],
                remaining = 10;
            console.log("Begin the guessing game.")
            // Defines the guess function, which handles most of the game.
            function guess() {
                // Defines game loss, when remaining hits 0
                if (remaining === 0) {
                    console.log('\nGame over!\nThe word you were guessing was: ' + rando);
                }
                // If no game loss, creates the Guess prompt.
                else {
                    inquirer.prompt([{
                        name: "entry",
                        type: "input",
                        message: "Choose a letter.",
                        validate: function (value) {
                            if (legit(value)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        // Runs only if the character used is legitimate through a series of if statements handled by is-letter
                    }]).then(function (ltr) {
                        // creates a new variable of legitEntry, which is the verified-as-a-letter version of Entry, 
                        // and forces it to lower case.
                        let legitEntry = (ltr.entry).toLowerCase(),
                            // sets priorGuess to false 
                            priorGuess = false;
                        // runs guessHandler on the legitEntry
                        random.guessHandler(legitEntry);
                        // runs a for loop to check if a guess has already been made
                        for (let i = 0; i < soFar.length; i++) {
                            if (legitEntry === soFar[i]) {
                                priorGuess = true;
                            }
                        }
                        // If a guess has not been made before, 
                            // adds it to the soFar array so we can keep track of guesses made.
                        if (priorGuess === false) {
                            soFar.push(legitEntry);
                            // If this guess is a correct guess, marks it as true, and checks for conditions.
                            if (random.right(legitEntry) === true) {
                                console.log('You got one!\n');
                                // Runs guessBuilder here to check for game win conditions by 
                                    // building out the currentResult variable
                                random.guessBuilder();
                                // Names the currentResult as str, so we can use it.
                                let str = random.currentResult;
                                // Trims the currentResult string of white space.
                                let check = str.replace(/ /g, '');
                                // Checks if the currentResult matches the word we are guessing. 
                                    // If so, we win and start a new game.
                                if (check == rando) {
                                    console.log('You won!\nThe word you were guessing was: ' + rando);
                                    newGame();
                                }
                                // If it does not, we keep going!
                                else {
                                    console.log('Guesses remaining: ' + remaining + '\n\nLetters Guessed: ' + soFar);
                                    // Triggers Guess to start over with a new letter.
                                    guess();
                                }
                            }
                            // If this is not a correct guess, tracks score, show you the current state, triggers Guess.
                            else {
                                console.log('Sorry, but that is incorrect.\n\n');
                                // Reduces Remaining Guesses by 1
                                remaining--;
                                console.log('Guesses remaining: ' + remaining + '\n\nLetters Guessed: ' + soFar);
                                // Runs guessBuilder to show current state of the guess.
                                random.guessBuilder();
                                // Triggers Guess to start over with a new letter.
                                guess();
                            }

                        }
                        // If this is a letter we've already chosen, tells them and prompts them for a new guess.
                        else {
                            console.log('You have guessed that already!\n');
                            // Triggers Guess to start over with a new letter.
                            guess();
                        }
                    })
                }
            }
            // Defines the new Random Word twice to start a new game (kind of).
            // Defined here for easy calling later
            let rando = randoCalrissian();
            // Using the Rando, calls an instance from the Word constructor.
            let random = new word.Word(rando);
            // calls for the Guess to start a new game.
            guess();
        }
    })
};

// Calls Game to start this whole ordeal.
game();