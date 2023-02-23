/*

Given an integer, invert it and return the integer again.

Examples:
invertInteger(123) ➞ 321
invertInteger(-123) ➞ -321

how to do it:
1. create a function that receives the number.
2. convert the number to a string.
3. split the string into an array.
4. reverse the array.
5. join the array into a string.
6. convert the string into a number.
7. return the number.
*/

function invertInteger(num){
    let invert = parseInt(num
        .toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(num);
    return `The number ${num} inverted is ${invert}`;
}

console.log(invertInteger(-123));