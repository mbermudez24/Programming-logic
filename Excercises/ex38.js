/*
given a number, display a list of the squares of all natural numbers up to the same number.

how to do it:
1. create 2 functions
2. create a loop from 0 to the number
3. take out the square and show it
*/

//classic function
function squareClassic(number){
    let squares = [];
    for(let i = 0; i <= number; i++){
        squares.push(i*i);
    }
    return `The squares of all natural numbers up to ${number} are:\n ${squares}`;
}

console.log(squareClassic(78));