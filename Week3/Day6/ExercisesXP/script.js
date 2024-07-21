/* Exercise 1 : List Of People
Instructions
const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review About Arrays
Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?*/

const people = ["Greg", "Mary", "Devon", "James"];

//PART I

var newPeople = people.filter(m => {
  return m !== 'Greg';
});

console.log(newPeople);

const jamesIndex = newPeople.indexOf("James");

newPeople[jamesIndex] = "Jason";

console.log(newPeople);

newPeople.push("Ronny");

const maryIndex = newPeople.indexOf("Mary");
console.log(maryIndex);

const newPeopleCopy = newPeople.slice(1, 3);
console.log(newPeopleCopy);

const fooIndex = newPeopleCopy.indexOf("Foo");
console.log(fooIndex); //Index return as -1 because this item is not part of the array

const last = newPeople[newPeople.length - 1];
console.log(last);


//PART II

/* Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.*/

for (i=0; i< people.length; i++) {
  console.log(people[i]);
}

for (i=0;i<people.length;i++) {
  if (people[i] === 'Devon') {
    console.log(people[i]);
    break;
  }
}

/*  Exercise 2 : Your Favorite Colors
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/

const colors = ['Red', 'Black', 'White', 'Green', 'Yellow'];
const suffixes = ['1st', '2nd', '3rd', '4th', '5th'];

for (i=0;i<colors.length;i++) {
  console.log(`My #${i+1} choice is ${colors[i]}.`);
  console.log(`My ${suffixes[i]} choice is ${colors[i]}.`);
}

/*  Exercise 3 : Repeat The Question
Instructions
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?*/

let userInput = prompt("Please enter a number: ");
console.log(typeof userInput);
let num = parseInt(userInput); 

while (num < 10) {
  userInput = parseInt(prompt("Please enter a number:"));
  num = userInput; // Convert user input to a number
}

if (num >= 10) {
  console.log(`You entered ${num}, which is 10 or greater.`);
} else {
  console.log("You cancelled or entered a non-numeric value.");
}

/* Exercise 4 : Building Management
Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


Review About Objects
Copy and paste the above object to your Javascript file.

Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
*/

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}

console.log(building['numberOfFloors']);
console.log(building['numberOfAptByFloor']['firstFloor'], building['numberOfAptByFloor']['thirdFloor']);
console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']['dan'][0]);

const saraRent = building['numberOfRoomsAndRent']['sarah'][1];
const davidRent = building['numberOfRoomsAndRent']['david'][1];
let danRent = building['numberOfRoomsAndRent']['dan'][1]; 
const sumSaraDavidRent = saraRent + davidRent;

if (sumSaraDavidRent > danRent) {
  building['numberOfRoomsAndRent']['dan'][1] = 1200; 
  danRent = building['numberOfRoomsAndRent']['dan'][1]; 
}

console.log(danRent);

/* Exercise 5 : Family
Instructions
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object. */

const family = {

  Father : 'Ronny',
  Mother : 'Lena',
  Son : 'Max',
  Daughter : 'Sophia'
}

for (let keys in family) { //Pretty much like Python, less the "let"
  console.log(keys);
}

for (let keys in family) {
  console.log(family[keys]); //Syntax to access the values of the keys
}

/* Exercise 6 : Rudolf
Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
Given the object above and using a for loop, console.log “my name is Rudolf the reindeer” */

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let fullPhrase = '';

for (let key in details) {
  fullPhrase += key + ' ' + details[key] + ' ';
}

fullPhrase = fullPhrase.trim(); //Removes the spaces at the beginning and at the end of the string

console.log(fullPhrase);

/* Exercise 7 : Secret Group
Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const sortedNames = names.slice().sort(); //Sorted copy of names
let secretName = "";

for (let i = 0; i < sortedNames.length; i++) {
    secretName += sortedNames[i][0];
}

console.log(secretName);


