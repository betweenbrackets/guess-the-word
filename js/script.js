// 1. create the global variables to select the elements
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(" remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
// Magnolia is the starting word to test out the game
const word = "magnolia";
// array for all the letters guessed
const guessedLetters = [];


// Display placeholders for the word's letters
const addPlaceholders = function (word) {
    // set empty array
    const placeholderLetters = [];
    // set loop
    for (const letter of word) {
        console.log(letter);
        // add element to the array
        placeholderLetters.push("●");
    }
    // update the text of the selected element with array elements joined into a string
    wordInProgress.innerText = placeholderLetters.join(""); 
};
addPlaceholders(word);

guessLetterButton.addEventListener("click", function (e) {
    // Don't want the default reload behavior
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // SETTING USER INPUT TO VARIABLE GUESS
    const guess = letterInput.value;
    // Let's make sure that the input is a single letter by calling our validate function below with user input as the parameter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    };
    // reset to empty
    letterInput.value = ""; 
});

// Let's validate input (string.length)
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    // Have you entered a letter?
    if (input.length === 0) {
    message.innerText = "Please enter a letter.";
    // Have you entered more than one letter?
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter from A to Z.";
    } else if (!input.match(acceptedLetter)) {
        // Have you entered a non-letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // input is a single letter -- yayness
        return input;
    }
};

// Let's test for duplicate guesses
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
// We've got a duplicate/it's in the array
    if (guessedLetters.includes(guess)) {
        message.innerText = "That letter's been guessed already."
    } else { // Add to the array
        guessedLetters.push(guess)
        console.log(guessedLetters);
    }
};

