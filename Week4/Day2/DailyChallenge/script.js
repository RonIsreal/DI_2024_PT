/* Instructions
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********


Hint
The number of stars that wraps the sentence, must depend on the length of the longest word.
*/

function frameWords() {
    let input = prompt("Please write some words separated by commas: ");
    let words = input.split(',').map(word => word.trim()); //Remove spaces from the words. Usually after the commas

    let maxLength = Math.max(...words.map(word => word.length)); //Here I'm finding the word with the longest length
    let frameWidth = maxLength + 4; //Here I'm adding +4 to make up for the empty space and asterisk on each side of the word

    let border = '*'.repeat(frameWidth);

    console.log(border);

    for (let word of words) {
        let paddedWord = `* ${word.padEnd(maxLength, ' ')} *`;
        console.log(paddedWord);
    }

    console.log(border);
}

frameWords();



