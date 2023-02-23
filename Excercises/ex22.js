/*

given 2 numbers, indicate which is the biggest and which is the smallest

how to do it:
1. create a function that receives 2 numbers
2. conditional to check which is the biggest
3. return the result

*/

//classic function
function biggestAndSmallest1(num1, num2){
    let result = '';
    if(num1 > num2){
        result = `${num1} is the biggest and ${num2} is the smallest`;
    }else if(num1 < num2){
        result = `${num2} is the biggest and ${num1} is the smallest`;
    }else{
        result = 'Both numbers are equal';
    }
    return result;
}

console.log(biggestAndSmallest1(5, 6));

//prototype function
Number.prototype.biggestAndSmallest2 = function(num){
    let result = '';
    if(this > num){
        result = `${this} is the biggest and ${num} is the smallest`;
    }else if(this < num){
        result = `${num} is the biggest and ${this} is the smallest`;
    }else{
        result = 'Both numbers are equal';
    }
    return result;
}

console.log((5).biggestAndSmallest2(6));
