/*

given a number, return its factorial

factorial is the product of all positive integers less than or equal to n

how to do it:
1. create a function that receives a number
2. loop from 1 to the number received
3. multiply the result by the current number
4. return the result
*/

//classic function
function factorial1(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return `The factorial of ${num} is: ${result}`;
}

console.log(factorial1(5));

//prototype function
Number.prototype.factorial2 = function(){
    let result = 1;
    for(let i = 1; i <= this; i++){
        result *= i;
    }
    return `The factorial of ${this} is: ${result}`;
}

console.log((3).factorial2());