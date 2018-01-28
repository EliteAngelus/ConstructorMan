
//Words contructor function.
var inquirer = require("inquirer");
var require = require("./letter");
var theWord = new Word(randomWord);

function Word(word){

this.word = word;
// this.guessedWord = [];
// this.blank = [];

answers = [];
var blank = [];

Word.prototype.printStats = function() {
	    console.log(this.word);
	};

// For loop iterating through each letter of the word. 
for (var i = 0; i < this.word.length; i++) {

		answers.push(this.word[i]);	
    blank.push(this.word[i]);
}

// For Loop iterating through each character in the answers arrary and changing them to underscores
for (var i = 0; i < blank.length; i++) {
	
		blank[i] = "_"
	} 
	console.log(blank);
}
// ======================================================================

// If else statement within the inquirer 


// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "prompt",
      message: "Guess the Letter!",
      name: "guess"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
]).then(function(user) {

    for (var i = 0; i < answers.length; i++) {
            
            if (user.guess === answers[i]) {
              console.log("match");

            }
    }
 
});



// PSEUDO CODE:
// through the letters banks and check to see if userGuess matches letter in bank. 
// If letter matches changes undescore to letter and run program again for additional guesses on words.
