// Letter constructor, passes Secret as an argument
function Letter(secret) {
    // This will be our actual letter.
    this.secret = secret;
    // Sets the letter to false.
    this.revealed = false;

    // Revealer hides, or reveals, the secret.
    this.revealer = function() {
        // If true, reveals the secret letter.
        if (this.revealed === true) {
            return this.secret + ' ';
        }
        // If false, shows an underscore instead. 
        else {
            return '_ '
        }
    }

    // Checks if an input character matches our secret, and prepares them for display.
    this.toggler = function(character) {
        // If the character selected matches ours, sets it to True.
        if (character === this.secret) {
            this.revealed = true;
        }
    }
}

// Packages the module for use in Word and Index.
module.exports = {
    Letter
}