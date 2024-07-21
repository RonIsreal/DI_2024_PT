/* Exercise 1 : Checking The BMI
Instructions
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.*/

let firstPerson = {
    fullName : "Ronny E",
    mass : 90,
    height : 1.81,
    myBMI : function () {
        return this.mass / (this.height * this.height)
    }
};

let secondPerson = {
    fullName : "Dude T",
    mass : 90,
    height : 1.71,
    myBMI : function () {
        return this.mass / (this.height * this.height)
    }
}

function compareBMIs(firstPerson, secondPerson) {
    let firstPersonBMI = firstPerson.myBMI();
    let secondPersonBMI = secondPerson.myBMI();

    if (firstPersonBMI > secondPersonBMI) {
        console.log(`${firstPerson.fullName} has the largest BMI.`);
    }
    else if (secondPersonBMI > firstPersonBMI) {
        console.log(`${secondPerson.fullName} has the largest BMI.`);
    } else {
        console.log(`${firstPerson.fullName} and ${secondPerson.fullName} have the same BMI.`)
    }
}

compareBMIs(firstPerson, secondPerson);

/* Exercise 2 : Grade Average
Instructions
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.
*/

let grades = [8,9,5,3,6];

function findAvg(gradesList) {
    let sum = 0;
    for (let grade of gradesList) {
        sum += grade
    }
    let gradesAvg = sum / gradesList.length;
    console.log(gradesAvg);

    checkApproved(gradesAvg);
}

function checkApproved(grdAvg) {
    if (grdAvg >= 6.5) {
        console.log(`You passed. Your average is ${grdAvg}.`)
    } else {
        console.log(`You failed. Your average is ${grdAvg}.`)
    }
}

findAvg(grades);


