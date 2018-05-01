// Global Variables
//==============================================================================================
// Create an array of words
var words = [
  'crown',
  'thirdeye',
  'throat',
  'heart',
  'solarplexus',
  'sacral',
  'root'
];

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum].toUpperCase();
let correctLetters = [];
let wrongGuess = true;
let correctGuesses = 0;
let wrongLetters = [];
let guessAmount = 6;
let wins = 0;
let placeHolder = [];

// // Project underscores based on the length of the chosen word
// let generateUnderScore = () => {
//   for (let i = 0; i < chosenWord.length; i++) {
//     placeHolder.push('_');
//   }
// };

function resetGame() {
  correctLetters = [];
  wrongGuess = true;
  correctGuesses = 0;
  wrongLetters = [];
  guessAmount = 6;
  placeHolder = [];

  var html = (document.getElementById('incorrect-letters').innerHTML = '');
  var html1 = (document.getElementById('guess-remain').innerHTML = guessAmount);
  let chosenWord = words[randNum].toUpperCase();
  // Project underscores based on the length of the chosen word
  for (let i = 0; i < chosenWord.length; i++) {
    placeHolder[i] = '_';
    console.log(placeHolder);
  }
  document.getElementById('underscores').innerHTML = placeHolder.join(' ');

  startGame();
  console.log('word to guess is: ' + chosenWord);
  var html2 = (document.getElementById('space-bar-start').innerHTML = '');
}

// Main

// Game Win Here ****
function gameWin() {
  // takes correctGuesses counter and if the amount = chosenWord.length YOU WIN!
  //alert you win
  //change image left-img
  //reload game

  wins++;
  console.log('win number: ' + wins);
  spaceBarStart();
}

//Game Loose Here ****
function gameLoose() {
  spaceBarStart();
}

// Spacebar start Here ****
function spaceBarStart() {
  document.querySelector('#space-bar-start').innerHTML =
    'PRESS THE SPACE BAR TO BEGIN!';
  document.onkeyup = function(event) {
    if (event.keyCode == 32) {
      resetGame();
    }
  };
}

spaceBarStart();

// ******* Start Game function ************** Took user guess (letterkey)
function startGame() {
  document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuessUpper = userGuess.toUpperCase();
    console.log('userGuessUpper: ' + userGuessUpper);
    document.getElementById('underscores').innerHTML = placeHolder;
    wrongGuess = true;

    if (
      correctLetters.indexOf(userGuessUpper) >= 0 ||
      wrongLetters.indexOf(userGuessUpper) >= 0
    ) {
      console.log('duplicate correct guess or incorrect guess');
    } else {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord.charAt(i) === userGuessUpper) {
          console.log('chosen word at i is: ' + chosenWord[i]);
          placeHolder[i] = userGuessUpper;
          correctLetters.push(userGuessUpper); //stores correct user guess
          console.log('correctLetters array: ' + correctLetters);
          console.log('placeholder updated = ' + placeHolder);
          wrongGuess = false;
          correctGuesses++; // adds guess to the correct guess counter
        }
        if (correctGuesses === chosenWord.length) {
          gameWin();
        }
      }
      if (wrongGuess == true) {
        //if the users guess doesnt match the chosenWord
        //store wrong guessed letter
        //push to missed array
        wrongLetters.push(userGuessUpper); //stores wrong user guess
        guessAmount--; // subtracts 1 guess from the user guess amount counter
        document.getElementById('guess-remain').innerHTML = guessAmount;
        document.getElementById('incorrect-letters').innerHTML = wrongLetters;

        //Game loose
        if (guessAmount == 0) {
          // if amount of guesses is 0, game over - you lose!
          // alert try again!
          // reload the game
          gameLoose();
          console.log('game over');
        }
      }
    }
    document.getElementById('underscores').innerHTML = placeHolder.join(' ');
  };
}
