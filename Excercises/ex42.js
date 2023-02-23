/*

given 2 numbers, draw a random number between them

hint: Math.random() returns a number between 0 and 1


*/

//classic function
function randomBetweenClassic(min, max){
    // Math.random() returns a number between 0 and 1
    // Math.floor() rounds a number down to the nearest integer
    // max - min + 1 is the range of numbers we want to return and + min is the offset
    // so if min is 1 and max is 10, we want to return a number between 1 and 10
    // +1
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetweenClassic(1, 10));

//arrow function
const randomBetweenArrow = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomBetweenArrow(1, 10));
