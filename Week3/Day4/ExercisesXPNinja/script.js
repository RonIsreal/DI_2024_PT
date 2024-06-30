/* Exercise 1 : Age Difference
Instruction
Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY */
const firstPerson = parseInt(prompt("What year were you born (1/2)? (YYYY): "));
const secondPerson = parseInt(prompt("What year were you born (2/2)? (YYYY): "));
const currentYear = 2024;

const firstPersonAge = currentYear - firstPerson;
const secondPersonAge = currentYear - secondPerson;

let olderPerson, youngerPerson;

if (firstPersonAge > secondPersonAge) {
    olderPerson = firstPersonAge;
    youngerPerson = secondPersonAge;
} else {
    olderPerson = secondPersonAge;
    youngerPerson = firstPersonAge;
}

if (youngerPerson === olderPerson / 2) {
    console.log(`The person born in ${secondPerson} is half the age of the person born in ${firstPerson}.`); //Note to self: USE `` backticks
} else {
    console.log("No date was found.");
}

/* Exercise 2 : Zip Codes
Instruction
Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length */

const userZip = prompt("Please write your 5-digit zipcode: ");

//PART 1

if (userZip.length !== 5) {
    console.log("Error");
} else {
    let validZip = true;

    for (let i = 0; i < userZip.length; i++) {
        let letter = userZip.charAt(i);
        
        if (letter < '0' || letter > '9') {
            validZip = false;
            break;
        }

        if (letter === ' ') {
            validZip = false;
            break; // Exit the loop early if a space is found
        }
    }

    if (validZip) {
        console.log("Success");
    } else {
        console.log("Error");
    }
}

// PART 2

const userZip = prompt("Please write your 5-digit zipcode: ");

if (userZip.length !== 5) {
    console.log("Error");
} else {
    const chars = /^\d+$/; //RegEx for digits ONLY
    if (!chars.test(userZip)) { //checks if the regex is NOT equivalent to the input
        console.log("Error");
    } else {
        console.log("Success");
    }
}

/* Exercise 3 : Secret Word
Instruction
Harder exercise
Hint : Use Regular Expressions

Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result.
Bonus: Replace the vowels with another character and console.log the result
a = 1
e = 2
i = 3
o = 4
u = 5 */

let userInput = prompt("Please write something: ");
const vowels = /[aeiou]/gi; // matches any vowel and is case insensitive
let newInput = "";

for (let i = 0; i < userInput.length; i++) {
    let letter = userInput.charAt(i);
    if (!vowels.test(letter)) {
        newInput += letter; // Append the letter to newInput if it's not a vowel
    }
}

console.log("Original input:", userInput);
console.log("New input:", newInput);

//BONUS replacing vowels with numbers

for (let i = 0; i < userInput.length; i++) {
    let letter = userInput.charAt(i);
    switch (letter.toLowerCase()) {
        case 'a':
            newInput += '1';
            break;
        case 'e':
            newInput += '2';
            break;
        case 'i':
            newInput += '3';
            break;
        case 'o':
            newInput += '4';
            break;
        case 'u':
            newInput += '5';
            break;
        default:
            newInput += letter;
            break;
    }
}

console.log("Original input:", userInput);
console.log("New input:", newInput);

