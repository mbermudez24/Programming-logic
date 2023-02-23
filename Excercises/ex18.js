/*

given a number, show all its divisor numbers

how to do it:
1. create a function that receives a number and check if it is divisor of the number
2. create a function to traverse and display
*/

//classic function
function isDivisor1(num, divisor){
    return num % divisor === 0;
}

function traverse1(num){
    for(let i = 1; i <= num; i++){
        if(isDivisor1(num, i)){
            console.log(`The number ${i} is divisor of ${num}`);
        }
    }
}

traverse1(20);

//prototype function
Number.prototype.isDivisor2 = function(divisor){
    return this % divisor === 0;
}

function traverse2(num){
    for(let i = 1; i <= num; i++){
        if(num.isDivisor2(i)){
            console.log(`The number ${i} is divisor of ${num}`);
        }
    }
}

// traverse2(20);
