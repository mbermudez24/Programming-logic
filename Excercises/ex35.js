/*

given an array, create another array with the first and last elements of the original array

how to do it:
1. create a function that receives an array
2. array push from the first and last element
3. return the result

*/

//classic function
function firstLast1(arr){
    let result = [];
    result.push(arr[0], arr[arr.length - 1]);
    return `The array with the first and last elements of the original array is: ${result}`;
}

console.log(firstLast1([1,2,3,4,5,6,7,8,9]));

//arrow function
let firstLast2 = arr => {
    let result = [];
    result.push(arr[0], arr[arr.length - 1]);
    return `The array with the first and last elements of the original array is: ${result}`;
}

console.log(firstLast2([1,2,3,4,5,6,7,8,9]));


//prototype function
Array.prototype.firstLast4 = function(){
    let result = [];
    result.push(this[0], this[this.length - 1]);
    return `The array with the first and last elements of the original array is: ${result}`;
}

console.log([1,2,3,4,5,6,7,8,9].firstLast4());