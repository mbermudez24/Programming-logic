/*

given a number, show its fibonacci sequence

fibonacci sequence is a sequence of numbers where the next number is the sum of the previous 2 numbers

how to do it:
1. create a function that receives a number
2. create a variable to store the 2 first numbers of the sequence
3. loop from 2 to the number received
4. add the previous 2 numbers to the current number
5. return the result

*/

//classic function
function fibonacci1(num){
    let result = [0, 1];
    for(let i = 2; i <= num; i++){
        result.push(result[i-1] + result[i-2]);
    }
    return `The fibonacci sequence of ${num} is: ${result} and the last number is: ${result[result.length-1]} and the sum of all numbers is: ${result.reduce((a, b) => a + b, 0)}`;
}

console.log(fibonacci1(10));

//arrow function
const fibonacci2 = num => {
    let result = [0, 1];
    for(let i = 2; i <= num; i++){
        result.push(result[i-1] + result[i-2]);
    }
    return `The fibonacci sequence of ${num} is: ${result} and the last number is: ${result[result.length-1]} and the sum of all numbers is: ${result.reduce((a, b) => a + b, 0)}`;
}

console.log(fibonacci2(10));

