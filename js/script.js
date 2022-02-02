// 1. create the global variables to select the elements
const guessedLettersUL = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const playerGuessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(" remaining span");
const guessMessages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
// Magnolia is the starting word to test out the game
const word = "magnolia";


// add placeholders for characters
const addPlaceholders = function (word) {
    // set empty array
    const placeholderLetters = [];
    // set loop
    for (const letter of word) {
        // console.log(letter);
        // add element to the array
        placeholderLetters.push("●");
        // console.log(placeholderLetters);
    }
    // update the text of the selected element with array elements joined into a string
    wordInProgress.innerText = placeholderLetters.join("");
    
};
addPlaceholders(word);

// capture letter entered
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // set a variable to capture user input
    const guessInput = playerGuessInput.value;
    console.log(guessInput);
    // reset to empty
    playerGuessInput.value = "";
});
