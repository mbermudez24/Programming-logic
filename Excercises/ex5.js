/*

Write a function that calculates the x percentage of y number.

Examples:
xPercentOfY(10, 50) ➞ 5
xPercentOfY(2, 5) ➞ 0.1
xPercentOfY(3, 400) ➞ 12

how to do it:
1. create a function that receives two numbers
2. create a variable that stores the result of the operation
3. return the result
*/

function xPercentOfY(percentage, number){
    let result = (number * (percentage/ 100));
    return `The ${percentage}% of ${number} is ${result}`;

}

console.log(xPercentOfY(10, 50));
