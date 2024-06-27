/* Exercise 1 : Evaluation
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

Evaluate the comparisons found below:


    5 >= 1
    0 === 1
    4 <= 1
    1 != 1
    "A" > "B"
    "B" < "C"
    "a" > "A"
    "b" < "A"
    true === false
    true != true */

	5 >= 1 //True - 5 is bigger than 1
    0 === 1 //False - 0 is a different value
    4 <= 1  //False - 4 is not smaller than 1
    1 != 1 //False - 1 is not different than 1
    "A" > "B"  //False - A is not bigger than B
    "B" < "C" //True - B is smaller than C
    "a" > "A" //True - Lower case a comes after upper case A
    "b" < "A" //False - Lower case b comes after lower case A
    true === false //False - Same kind different value
    true != true //False - true is not different than true

    /* Exercise 2 : Ask For Numbers
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
Examples
"2,3"➞ 5 */

let userNumbers = prompt("Please write some numbers separated by comma (,): ");
let sum = 0;

let numbers = userNumbers.split(",");
numbers.forEach( numStr => {
  let num = parseInt(numStr);
  sum += num;
});
console.log(sum)

/* Exercise 3 : Find Nemo
Instructions
Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.
Some examples:

    "I love the movie named Nemo" ➞ "I found Nemo at 5"
    "Nemo is a cute fish" ➞ "I found Nemo at 0"
    "My fish is called Nemo, I love it" ➞ "I found Nemo at 4" */

let userInput = prompt("Write something: ");
let userWords = userInput.split(" ");
let foundNemo = false; 

for (let i = 0; i < userWords.length; i++) {
    if (userWords[i].toLowerCase() === "nemo") {
        console.log("I found Nemo at index " + i);
        foundNemo = true; // Update the variable indicating "Nemo" is found
        break; // Exit the loop once "Nemo" is found
    }
}

if (!foundNemo) {
    console.log("I haven't found Nemo...");
}

/* Exercise 4 : Boom
Instructions
Hint: if statement (tomorrow’s lesson)

Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
Examples
4 ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
1 ➞ "boom"
// 1 is lower than 2, so we return "boom" */

userInput = parseInt(prompt("Please choose a number: "));

if (userInput <= 2) {
	console.log("boom");
}
else if (userInput > 2) {
	if (userInput % 2 === 0 && userInput % 5 === 0) {
		console.log("B" + "O".repeat(userInput) + "M!");
	}
	else if (userInput % 5 === 0) {
		console.log("B" + "O".repeat(userInput) + "M");
	}
	else if (userInput % 2 === 0) {
		console.log("b" + "o".repeat(userInput) + "m!");
	}
} else {
	console.log("Not a valid input.");
}