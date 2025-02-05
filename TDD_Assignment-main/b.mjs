import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    // Check if name is not a string
    if (typeof name !== 'string') { //if name is not a string, the function returns null.
        return null;
    }

    //remove leading and trailing whitespace from the string.
    name = name.trim(); 

    // Check if the string is empty after trimming
    if (name === '') { //if the string is empty after trimming, the function returns an empty string.
        return '';
    }

    // Check for special characters
    if (/[^a-zA-Z\s]/.test(name)) { //if the string contains special characters, the function returns null.
        return null;
    }

    // capitalize the first letter of each word in the name.
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); 
    //name.split(' ') splits the string into an array of words. map() is used to capitalize the first letter of each word and convert the rest of the word to lowercase. join(' ') joins the words back into a single string.
}



//#endregion




//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("FormatName function"); //name "FormatName function" for test function from the testing framework

// Valid inputs
tests.isEqual(formatName("apple pie"), "Apple Pie", "Format 'apple pie' should be 'Apple Pie'");
tests.isEqual(formatName("banana split"), "Banana Split", "Format 'banana split' should be 'Banana Split'");
tests.isEqual(formatName("PIZZA"), "Pizza", "Format 'PIZZA' should be 'Pizza'");
tests.isEqual(formatName("chocolate cake"), "Chocolate Cake", "Format 'chocolate cake' should be 'Chocolate Cake'");

// Invalid inputs
tests.isEqual(formatName(123), null, "Format 123 should return null"); 
//The test checks if formatting a number (123) returns null.
tests.isEqual(formatName(null), null, "Format null should return null"); 
//The test checks if formatting null returns null.
tests.isEqual(formatName("burger@fries"), null, "Format 'burger@fries' should return null"); 
//The test checks if formatting a string with special characters returns null.
tests.isEqual(formatName(""), "", "Format '' should return ''"); 
//The test checks if formatting an empty string returns an empty string.

// Edge cases
tests.isEqual(formatName("   "), "", "Format '   ' should return ''"); 
//The test checks if formatting a string with only whitespace returns an empty string.
tests.isEqual(formatName("ice-cream"), null, "Format 'ice-cream' should return null"); 
//The test checks if formatting a string with a hyphen returns null.

//#endregion

console.log('hello world');