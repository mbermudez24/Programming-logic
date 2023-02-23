/*

Given two arrays, return an array with only the common elements between the two arrays.

Examples:
commonElements([1, 2, 3], [2, 3, 4]) ➞ [2, 3]
commonElements([1, 2, 3], [4, 5, 6]) ➞ []

how to do it:
1. create a function that receives two arrays.
2. filter the first array and evaluate a condition.
3. return the array with the common elements.
*/

function commonElements(arr1, arr2){
    return `the common elements between ${arr1} and ${arr2} are 
    ${arr1.filter(element => arr2.includes(element))}`;
}

console.log(commonElements([1, 2, 3], [2, 3, 4]));
