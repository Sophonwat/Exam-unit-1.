import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

// The function takes an indefinite number of arguments and returns the product of the numbers.

function multiply(...args) { //...args allows the function to accept an indefinite number of arguments as an array
    let product = 1; //product is initialized to 1. This variable will hold the result of the multiplication of the arguments.
    for (let arg of args) { //Iterate over each argument
        // Convert string to number if possible
        if (typeof arg === 'string' && !isNaN(arg)) { 
            arg = parseFloat(arg); //if arg is a string and can converted to a number (!isNaN(arg)), convert it to a number using parseFloat
        }
        // return NaN if arg is not a number
        if (typeof arg !== 'number' || isNaN(arg)) { //if arg is not a number or is NaN, the function returns NaN.
            return NaN;
        }
        // Return Infinity or -Infinity if arg is Infinity or
        if (arg === Infinity || arg === -Infinity) {//if arg is Infinity or -Infinity, the function returns that valu immmediately.
            return arg;
        }
        // Multiply the product by the current argument
        product *= arg;
    }
    return product; //after the loop, the function returns the final product.
}

//#endregion


//test.isEqual() check if two values are equal.


//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("multiply function"); //name "multiply function" fir test function from the testing framwork

// Valid inputs. These tests check if the function correctly multiplies valid numbers and strings that can be converted to numbers.
tests.isEqual(multiply(3, 4), 12, "Product of 3 and 4 should be 12"); 
tests.isEqual(multiply(5, "2"), 10, "Product of 5 and '2' should be 10");
tests.isEqual(multiply(1.5, 3), 4.5, "Product of 1.5 and 3 should be 4.5");
tests.isEqual(multiply(7, 0), 0, "Product of 7 and 0 should be 0");
tests.isEqual(multiply(1, 2, 3, 4), 24, "Product of 1, 2, 3, and 4 should be 24");

// Invalid inputs. These tests check if the function returns NaN when given invalid inputs.
tests.isNotANumber(multiply(3, NaN), "Product of 3 and NaN should return NaN"); //The test checkinf if multiplying 3 and Nan returns NaN.
tests.isNotANumber(multiply(4, "xyz"), "Product of 4 and 'xyz' should return NaN"); //Check if the multiplyihg 4 and the string "xyz" (which cannot be converted to a number) returns NaN.
tests.isNotANumber(multiply(5, null), "Product of 5 and null should return NaN"); //check if multiplying 5 and null returns NaN.
tests.isNotANumber(multiply(undefined, 6), "Product of undefined and 6 should return NaN"); //check if multiplying undefined and 6 returns NaN.

// Edge cases. These tests check if the function handles special cases like no arguments, Infinity, and -Infinity correctly.
tests.isEqual(multiply(), 1, "Product of no arguments should be 1"); //Check if multiplying no arguments returns 1.
tests.isEqual(multiply(Infinity, 2), Infinity, "Product of Infinity and 2 should be Infinity"); //Check if multiplying Infinity and 2 returns Infinity.
tests.isEqual(multiply(-Infinity, 3), -Infinity, "Product of -Infinity and 3 should be -Infinity"); //Check if multiplying -Infinity and 3 returns -Infinity.


//#endregion

console.log('hello world');