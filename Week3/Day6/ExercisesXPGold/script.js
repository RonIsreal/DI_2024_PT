/* Exercise 1 : Divisible By Three
Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false.
*/

let numbers = [123, 8409, 100053, 333333333, 7];

for (let number of numbers) { //Went wrong when I used "in" instead "of". "in" goes for indexes, "of" goes for values. REMEMBER THAT.
    if (number % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

/* Exercise 2 : Attendance
Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


Given the object above where the key is the student’s name and the value is the country they are from.

Prompt the student for their name.

If the name is in the object, console.log the name of the student and the country they come from.
For example: "Hi! I'm [name], and I'm from [country]."
Hint: You don’t need to use a for loop, just look up the statement if ... in

If the name is not in the object, console.log: "Hi! I'm a guest." */

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  const yourName = prompt("What's your name?: ").toLowerCase();

  if (yourName in guestList) {
    console.log(`Hi! I'm ${yourName} and I'm from ${guestList[yourName]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }

  /* Exercise 3 : Playing With Numbers
Instructions
let age = [20,5,12,43,98,55];
Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.*/

let age = [20,5,12,43,98,55];

let sumAge = 0;

for (let value of age) {
    sumAge += value
}
console.log(sumAge)

let highestValue = age[0];
for (let i = 1; i < age.length; i++) { //Starting from 1 because 0 is already the value I assigned to the variable
    if (age[i] > highestValue) {
        highestValue = age[i];
    }
}
console.log(highestValue);
