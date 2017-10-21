// Global Variables
//==============================================================================================
// Create an array of words
var words = ['crown', 'thirdeye', 'throat', 'heart', 'solarplexus', 'sacral', 'root'];

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let correctLetters = [];
let wrongGuess = true;
let correctGuesses = 0;
let wrongLetters = [];
let guessAmount = 24;
let wins = 0;
let underScore = [];


function resetGame() {
	
// Choose word randomly
	
	correctLetters = [];
	wrongGuess = true;
	correctGuesses = 0;
	wrongLetters = [];
	guessAmount = 24;
	
	underScore = [];
}

console.log(chosenWord);

// Main
//==============================================================================================


// Project underscores based on the length of the chosen word
	let generateUnderScore = () => {
		for(let i = 0; i < chosenWord.length; i ++) {
			underScore.push('_');
		}
		return underScore;
	}

// Took user guess (letterkey)
document.onkeyup = function (event) {
	var userGuess = event.key;
	console.log(userGuess);
	wrongGuess = true;

// The user guess matches an index of the chosenWord
if (guessAmount == 0) {	// if amount of guesses is 0, game over - you lose!
// alert try again!
// reload the game
console.log('game over');

	}

for (let j = 0; j < chosenWord.length; j ++) {
				if (userGuess == chosenWord.charAt(j)) {       //if the user guess matches a letter in the chosenWord
					//store letter
					correctLetters.push(userGuess); //stores correct user guess
					console.log('correctLetters array: ' + correctLetters);
					correctGuesses ++; // adds guess to the correct guess counter
					wrongGuess = false;
					//display in #underscores

				console.log('correct guesses amount:' + correctGuesses);
				console.log("chosenWord @ J is: " + chosenWord[j]);
				}

										if (correctGuesses === chosenWord.length) { // takes correctGuesses counter and if the amount = chosenWord.length YOU WIN!
										//alert you win
										//change image left-img
										//reload game
											wins ++;
											console.log('win number: ' + wins);


										}
}			
				if (wrongGuess == true) {                                         //if the users guess doesnt match the chosenWord
				//store wrong guessed letter
				//push to missed array
					wrongLetters.push(userGuess); //stores wrong user guess
					guessAmount --; // subtracts 1 guess from the user guess amount counter
					console.log('array of wrongLetters: ' + wrongLetters);
					console.log('# of guesses left: ' + guessAmount);


				}
}


// document.querySelector("#demo").innerHTML = "Hello World!";




			
	






