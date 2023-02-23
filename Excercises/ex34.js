/*

given 2 numbers, return the result of the basic operations between them (addition, subtraction, multiplication, division)

how to do it:
1. create a function that receives 2 numbers
2. Template string and basic operations
3. return the result

*/

//classic function
function basicOperations1(num1, num2){
    return `The result of the basic operations between ${num1} and ${num2} is:\n Addition: ${num1 + num2}\n Subtraction: ${num1 - num2}\n Multiplication: ${num1 * num2}\n Division: ${num1 / num2}`;
}

console.log(basicOperations1(10, 5));

//arrow function
let basicOperations2 = (num1, num2) => `The result of the basic operations between ${num1} and ${num2} is:\n Addition: ${num1 + num2}\n Subtraction: ${num1 - num2}\n Multiplication: ${num1 * num2}\n Division: ${num1 / num2}`;

console.log(basicOperations2(10, 5));

//arrow function with object
let basicOperations3 = (num1, num2) => {
    return {
        addition: num1 + num2,
        subtraction: num1 - num2,
        multiplication: num1 * num2,
        division: num1 / num2
    }
}

console.log(basicOperations3(10, 5));

//arrow function with object and template string
let basicOperations4 = (num1, num2) => {
    return {
        addition: `${num1} + ${num2} = ${num1 + num2}`,
        subtraction: `${num1} - ${num2} = ${num1 - num2}`,
        multiplication: `${num1} * ${num2} = ${num1 * num2}`,
        division: `${num1} / ${num2} = ${num1 / num2}`
    }
}

console.log(basicOperations4(10, 5));
