// Global Variables
//==============================================================================================
// Create an array of words
var words = [
  'CROWN',
  'THIRDEYE',
  'THROAT',
  'HEART',
  'SOLARPLEXUS',
  'SACRAL',
  'ROOT'
];

// Choose word randomly

let correctLetters = [];
let wrongGuess = true;
let correctGuesses = 0;
let wrongLetters = [];
let guessAmount = 6;
let wins = 0;
let losses = 0;
let placeHolder = [];

function resetGame() {
  correctLetters = [];
  wrongGuess = true;
  correctGuesses = 0;
  wrongLetters = [];
  guessAmount = 6;
  placeHolder = [];

  var html = (document.getElementById('incorrect-letters').innerHTML = '');
  var html1 = (document.getElementById('guess-remain').innerHTML = guessAmount);
  // Chosen word?
  chosenWord = words[Math.floor(Math.random() * words.length)];
  // Project underscores based on the length of the chosen word
  for (var i = 0; i < chosenWord.length; i++) {
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
  wins++;
  document.getElementById('wins').innerHTML = wins;
  console.log('You win!');

  if (chosenWord === 'CROWN') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/crown-chakra.jpg">';
  }
  if (chosenWord === 'THIRDEYE') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/thirdeye.jpg">';
  }
  if (chosenWord === 'THROAT') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/throat.jpg">';
  }
  if (chosenWord === 'HEART') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/heart.jpg">';
  }
  if (chosenWord === 'SOLARPLEXUS') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/solarplexus.jpg">';
  }
  if (chosenWord === 'SACRAL') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/sacral.jpg">';
  }
  if (chosenWord === 'ROOT') {
    document.getElementById('left-img').innerHTML =
      '<img src="./assets/images/root.jpg">';
  }
  spaceBarStart();
}

//Game Loose Here ****
function gameLoose() {
  losses++;
  document.getElementById('losses').innerHTML = losses;
  spaceBarStart();
}

// Spacebar start Here ****
function spaceBarStart() {
  document.querySelector('#space-bar-start').innerHTML =
    'PRESS THE SPACE BAR TO BEGIN!';

  document.onkeyup = function(event) {
    if (event.keyCode == 32) {
      document.getElementById('left-img').innerHTML = '';
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
      for (var i = 0; i < chosenWord.length; i++) {
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
