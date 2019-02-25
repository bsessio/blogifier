// Requires the Letter module for word-combining.
const letter = require('./letter.js');

// The Letter constructor, passes theWord as an argument.
function Word(theWord) {
    // Sets some variables for later.
    this.currentResult = '';
    this.guessArray = [];
    // Runs a for Loop which builds the guessArray out of individual Letter instances.
    for (let i = 0; i < theWord.length; i++) {
        this.guessArray[i] = new letter.Letter(theWord[i]);
    }

    // The guessBuilder, which displays the current state of the letters, whether hidden or revealed.
    this.guessBuilder = function () {
        // Defines the result for later.
        let result = '';
        // Runs a for Loop which builds the displayed word by letter/underscore one at a time)
        for (let i = 0; i < this.guessArray.length; i++) {
            result = result + this.guessArray[i].revealer();
        }
        // Redefines the local result of this function to a targetable variable.
        this.currentResult = result;
        // Prints the result. This could also be 'result', but since I'm here anyway.
        console.log(this.currentResult);
    };

    // The guessHandler, which checks for guesses and then flips them for revealing as appropriate.
    this.guessHandler = function(character) {
        // Runs a for Loop which checks through each letter for the revealing condition per Toggler.
        for (let i = 0; i < this.guessArray.length; i++) {
            this.guessArray[i].toggler(character);
        }
    };

    // Replicates some of the Toggler's work, 
        // for ease of identifying revealed character matches for the index's game logic.
    this.right = function(character) {
        // Runs a for Loop to check if the input character matches any of the secret letters; if so, returns True.
        for (let i = 0; i < this.guessArray.length; i++) {
            if (character === this.guessArray[i].secret) {return true}
        }
        // If not, returns False.
        return false
    }
}
// Packages the module for use in Index
module.exports = {
    Word
}