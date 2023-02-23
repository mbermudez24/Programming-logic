/*
Given a text string, flip it around and invert the order of its characters, without using language-specific methods. only control structures.

how to do it:
1. create a function that receives a string
2. create a variable that stores the inverted string
3. create a loop that loops through the string and stores the characters in the variable.
4. return the inverted string
*/

function invertString(string){
    let invertedString = '';
    for(let char of string){
        invertedString = char + invertedString;
    }
    return `The word ${string} inverted is ${invertedString}`;
}

//with split and reverse
function invertStringReverse(string){
    let invertedString = string.split('').reverse().join('');
    return `The word ${string} inverted with reverse is ${invertedString}`;
}

console.log(invertString('awaken'));