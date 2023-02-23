/*
given an array of numbers, return the highest and the lowest value

how to do it:
1. order the array
2. take the first and the last value
*/

//classic function
function highLowClassic(array){
    //compare the values of the array and sort them from lowest to highest.
    array.sort((a,b) => a - b);
    //return the first and the last value
    return `The highest value is ${array[array.length - 1]} and the lowest value is ${array[0]}`;
}

console.log(highLowClassic([1,2,3,4,5,6,7,8,9,10]));

//arrow function
let highLowArrow = (array) => {
    //compare the values of the array and sort them from lowest to highest.
    array.sort((a,b) => a - b);
    //return the first and the last value
    return `The highest value is ${array[array.length - 1]} and the lowest value is ${array[0]}`;
}

console.log(highLowArrow([1,2,3,4,5,6,7,8,9,10]));

//prototype function
function HighLow(array){
    this.array = array;
}

HighLow.prototype.highLowPrototype = function(){
    //compare the values of the array and sort them from lowest to highest.
    this.array.sort((a,b) => a - b);
    //return the first and the last value
    return `The highest value is ${this.array[this.array.length - 1]} and the lowest value is ${this.array[0]}`;
}

let highLowPrototype = new HighLow([1,2,3,4,5,6,7,8,9,10]);
console.log(highLowPrototype.highLowPrototype());