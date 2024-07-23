/* Instructions
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by yourself, without looking at the answers on the internet.
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/

const stars = ['*','* *','* * *','* * * *','* * * * *','* * * * * *'];

for (let i=0;i<stars.length;i++) {
    console.log(stars[i]);
};

function nestLoops(starPattern) {
    for (let i = 1; i <= starPattern; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '* ';
        }
        console.log(stars);
    }
};

// Testing the function with 6 rows
nestLoops(6);
