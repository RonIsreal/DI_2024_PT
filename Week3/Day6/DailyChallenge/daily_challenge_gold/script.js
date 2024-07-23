/* Instructions
const numbers = [5,0,9,1,7,4,2,6,3,8];

Using the .toString() method convert the array to a string.
Using the .join()method convert the array to a string. Try passing different values into the join.
Eg .join(“+”), .join(” “), .join(“”)
Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called “Bubble Sort”
Use a temporary variable to swap values in the array.
Use 2 “nested” for loops (Nested means one inside the other).
Add comments and console.log the result for each step, this will help you understand.*/

const numbers = [5,0,9,1,7,4,2,6,3,8];

let numbersString = numbers.toString();
let joinedPlus = numbers.join('+');
console.log(joinedPlus);

const numbersCopy = [...numbers]; //Syntax for copying an array (didn't know that)
const n = numbersCopy.length;

// bubble sort in descending order (googled it)
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (numbersCopy[j] < numbersCopy[j + 1]) {
      // Swap elements if they are in the wrong order
      let temp = numbersCopy[j];
      numbersCopy[j] = numbersCopy[j + 1];
      numbersCopy[j + 1] = temp;
    }
  }
}

console.log(numbersCopy); //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
