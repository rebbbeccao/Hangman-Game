// Global Variables
//==============================================================================================
// Create an array of words
var words = ['crown', 'thirdeye', 'throat', 'heart', 'solarplexus', 'sacral', 'root'];

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let wins = [];
let missed = [];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName("underscores");
let docMissed = document.getElementsByClassName("letters-guessed");

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
console.log(generateUnderScore());	

// Get user's guess
document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keycode);

console.log(keyword);	

// If users guess is right
		if(chosenWord.indexOf(keyword) > -1) {
// adds to right word array
			wins.push(keyword);
		
// replace underscore with right letter
			underScore[chosenWord.indexOf(keyword)] = keyword;
			docUnderScore[0].innerHTML = underScore.join(' ');	
			docWins[0].innerHTML = wins.join('');
// checks to see if user guesses match chosen word 
		
		if(underScore.join(' ') == chosenWord) {
			alert('You win!');
			}
		} 
		else {
			missed.push(keyword);
		}	
});	






docUnderScore[0].innerHTML = generateUnderScore().join(' ');	
			

	
			
	






