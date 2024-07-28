/* Exercise 1 : is_Blank
Instructions
Write a program to check whether a string is blank or not.

console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false */

function isBlank() {
    const input = prompt("Please write something: ");
    if (input !== null && input.trim() !== "") {
        console.log(false);
    }
    else {
        console.log(true);
    }
};

/* Exercise 2 : Abbrev_name
Instructions
Write a JavaScript function to convert a string into an abbreviated form.

console.log(abbrevName("Robin Singh")); --> "Robin S." */

function abbrevName(fullName) {
    const nameParts = fullName.split(' '); //Divide the string into name and last name
    if (nameParts.length < 2) {
        return fullName;
    }
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[1][0] + '.';
    return `${firstName} ${lastNameInitial}`;
}

console.log(abbrevName("Robin Singh"));

/* Exercise 3 : SwapCase
Instructions
Write a JavaScript function which takes a string as an argument and swaps the case of each character.
For example :

if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.*/


