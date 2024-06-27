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
