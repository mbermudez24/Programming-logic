/*

Given two numbers, return how many odd numbers there are between them.

Examples:

oddNumbers(1, 10) ➞ 5
oddNumbers(1, 5) ➞ 2

how to do it:
1. create a function that receives the two numbers.
2. loop from the first number to the second number.
3. conditional to check if the number is odd
4. if the number is odd, add 1 to the counter.
5. return the counter.

*/

function oddNumbers(num1, num2){
    let counter = 0;
    num3 = num1;
    while(num1 <= num2){
        if(num1 % 2 !== 0){
            counter++;
        }
        num1++;
    }
    return `There are ${counter} odd numbers between ${num3} and ${num2}`;
}

console.log(oddNumbers(1, 10));