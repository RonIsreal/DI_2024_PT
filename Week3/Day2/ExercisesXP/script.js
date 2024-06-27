/* Exercise 1: Your Favorite Food
Instructions
Store your favorite food into a variable.

Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

Console.log I eat <favorite food> at every <favorite meal>*/

const favfood = "Bacon and Eggs"
const favmeal = "Breakfast"

console.log("I eat "+ favfood + " at every " + favmeal + ".")

/* Exercise 2 : Series
Instructions
Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory


Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

let myWatchedSeries = ['Black Mirror', 'Money Heist', "The Big Bang Theory"]

const myWatchedSeriesLength = myWatchedSeries.length
const myWatchedSeriesSentence = myWatchedSeries.join(", ")
console.log(myWatchedSeriesLength)
console.log(myWatchedSeriesSentence)
console.log("I watched " + myWatchedSeriesLength + ": " + myWatchedSeriesSentence + ".")

//Part II

const indexOfBBT = myWatchedSeries.indexOf("The Big Bang Theory")
console.log(indexOfBBT)
myWatchedSeries[2] = "Friends"
console.log(myWatchedSeries)
myWatchedSeries.push("The Witcher")
myWatchedSeries.unshift("One Piece")
const indexToDelete = myWatchedSeries.indexOf("Black Mirror")
myWatchedSeries.splice(indexToDelete, 1)
console.log(myWatchedSeries)
const indexOfMH = myWatchedSeries.indexOf("Money Heist")
const moneyHeist = myWatchedSeries[1]
console.log(moneyHeist[2])
console.log(myWatchedSeries)

/* Exercise 3 : The Temperature Converter
Instructions
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32*/

const tempCelsius = 30
const tempFahrenheit = ((tempCelsius / 5) * 9) + 32
console.log(tempFahrenheit)

/*  Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:
    // Actual:

    a = 2;

    console.log(a+b) //second expression
    // Prediction:
    // Actual:



What will be the outcome of a + b in the first expression ? A: 55. It sums the values from a and b 
What will be the outcome of a + b in the second expression ? A: 23. The value for a changed from 34 to 2
What is the value of c? A: undefined. No value was given to c.

Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); A: 75. It will sum the integers 3 and 4 and then concatenate the string 5 into the result string from the sum operation

/* Exercise 5 : Guess The Answers #2
Instructions
For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.

Then run the expression in the console of your browser (NOT IN VS CODE).

Note the actual output in a comment and compare it with your prediction.



For example

typeof("potato")
// Prediction: Vegetable
// Actual: String


What is the output of each of the expressions below?


typeof(15)
// Prediction: Integer
// Actual: number

typeof(5.5)
// Prediction: Float
// Actual: number

typeof(NaN)
// Prediction: Not a Number
// Actual: number

typeof("hello")
// Prediction: String
// Actual: string

typeof(true)
// Prediction: Boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: Boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: '13'

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: NaN 
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: Boolean
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false */


/*Exercise 6 : Guess The Answers #3
Instructions
For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.

Then run the expression in the console of your browser (NOT IN VS CODE).

Note the actual output in a comment and compare it with your prediction.



What is the output of each of the expressions below?


5 + "34"
// Prediction: "534"
// Actual: '534'

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

" " + " "
// Prediction: "  "
// Actual: '  '

" " + 0
// Prediction: " 0"
// Actual: ' 0'

true + true
// Prediction: "truetrue"
// Actual: 2

true + false
// Prediction: 0
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1 */