import test from "./test.mjs";

/*
    Challenge: Implement the `sequence` function.

    Your task:
    1. Write a function `sequence` that passes the tests below.
    2. The function should handle various edge cases, including invalid inputs.

    Good luck!
*/

function sequence(n) {
    // Handle invalid inputs
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) { 
        //if n is not a number, is negative, or is not an integer, the function returns null.
        return null;
    }

    // base cases
    if (n === 0) return 0; //if n is 0, the function returns 0.
    if (n === 1) return 1; //if n is 1, the function returns 1.

    // calculate Fibonacci sequence
    let a = 0, b = 1; //initialize the first two numbers of the sequence
    //a is the first number in the sequence, and b is the second number in the sequence.
    for (let i = 2; i <= n; i++) { //loop from 2 to n
        let temp = a + b; //calculate the next number in the sequence
        //in the loop    
            // temp = 1 + 1 = 2
        //in the next iteration
            // temp = 1 + 2 = 3
        a = b; //(a, b) is updated to (b, temp) for the next iteration.
        //in the loop    
            // a is now 1 (the old value of b)
        //in the next iteration
            // a is now 2 (the old value of b)
        b = temp;
        //in the loop 
        // b is now 2 (the value of temp)
        //in the next iteration
        // b is now 3 (the value of temp)
    }
    return b; 
}

//#region Tests --------------------------------------------------------------------
const tests = test("Sum function");

// Basic cases
tests.isEqual(sequence(0), 0, "For n = 0, the function should return 0");
tests.isEqual(sequence(1), 1, "For n = 1, the function should return 1");
tests.isEqual(sequence(2), 1, "For n = 2, the function should return 1");
tests.isEqual(sequence(3), 2, "For n = 3, the function should return 2");
tests.isEqual(sequence(4), 3, "For n = 4, the function should return 3");
tests.isEqual(sequence(5), 5, "For n = 5, the function should return 5");
tests.isEqual(sequence(6), 8, "For n = 6, the function should return 8");
tests.isEqual(sequence(10), 55, "For n = 10, the function should return 55");

// Large input
tests.isEqual(sequence(20), 6765, "For n = 20, the function should return 6765");

// Edge cases
tests.isEqual(sequence(-1), null, "Negative input should return null");
tests.isEqual(sequence(1.5), null, "Non-integer input should return null");
tests.isEqual(sequence("5"), null, "String input should return null");
tests.isEqual(sequence(null), null, "Null input should return null");

//#endregion

console.log('hello world');