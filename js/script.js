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

// set button behavior
// set user input variable
guessLetterButton.addEventListener("click", function (e) {
    // Don't want the default reload behavior
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // SETTING USER INPUT TO VARIABLE "GUESS"
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
    } else { // POPULATE THE gUESSEDLETTERS ARRAY
        guessedLetters.push(guess)
        console.log(guessedLetters);
        // Call the showGuessedLetter function here so that the letter displays only if it hasn't been guessed before
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

// Let's display the guessed letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (let guessedLetter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = guessedLetter;
        guessedLettersElement.append(listItem);
    }
};

// Let's update the Word In Progress - push either the character or the symbol
// array as parameter
const updateWordInProgress = function (guessedLetters) {
    // declare word is progress variable and transform to upper case to avoid leter case errors
    const wordUpper = word.toUpperCase();
    // split the string and return as elements in an array
    const wordArray = wordUpper.split("");
    // console.log("This is " + wordArray);
    // set the array of both correct guesses and placeholders
    const revealWord = [];
    // test each element of guessedLetters for a match of wordArray
    for (const character of wordArray) {
        if (guessedLetters.includes(character)) {
            // if match, push the character 
            revealWord.push(character.toUpperCase())
        } else { // if don't match, push placeholder
                revealWord.push("●")
            }
    }
    console.log(revealWord);
    // update the text with the new array elements
    wordInProgress.innerText = revealWord.join("");
    checkIfWonYet();
};

// Let's check if we've won yet
const checkIfWonYet = function () {
    // test the word against the guesses
    if (word.toUpperCase() === wordInProgress.innerText) {
        // if they match, party!
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
    }
};


