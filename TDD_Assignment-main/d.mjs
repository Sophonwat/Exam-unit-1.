import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
function guessNumber(target, guess) {
    // Check if either input is not a valid integer
    if (!Number.isInteger(target) || !Number.isInteger(guess)) { 
        //if either input is not a valid integer, the function returns null.
        return null;
    }

    // compare guess with target and return the appropriate response
    return guess < target ? "Too low" : guess > target ? "Too high" : "Correct!";
    //if guess is less than target, return "Too low"
    //if guess is greater than target, return "Too high"
    //if guess is equal to target, return "Correct!"



    
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Guess Number function");

// Basic cases
tests.isEqual(guessNumber(3, 1), "Too low", "If target is 3 and guess is 1, return 'Too low'");
tests.isEqual(guessNumber(3, 4), "Too high", "If target is 3 and guess is 4, return 'Too high'");
tests.isEqual(guessNumber(3, 3), "Correct!", "If target is 3 and guess is 3, return 'Correct!'");

// Invalid inputs
tests.isEqual(guessNumber(3, "1"), null, "If guess is a string, return null");
tests.isEqual(guessNumber("3", 1), null, "If target is a string, return null");
tests.isEqual(guessNumber(3, null), null, "If guess is null, return null");
tests.isEqual(guessNumber(undefined, 1), null, "If target is undefined, return null");

// Edge cases
tests.isEqual(guessNumber(0, 0), "Correct!", "If target is 0 and guess is 0, return 'Correct!'");
tests.isEqual(guessNumber(-3, -1), "Too high", "If target is -3 and guess is -1, return 'Too high'");
tests.isEqual(guessNumber(-3, -4), "Too low", "If target is -3 and guess is -4, return 'Too low'");

//#endregion

console.log("hello world");