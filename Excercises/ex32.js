/*

given an array of numbers, return the array with their numbers squared.
must remove the non-numbers from the array

how to do it:
1. create a function that receives an array
2. filter the array
3. modify the content of the array
4. return the result

*/

//classic function
function square1(arr){
    arr = arr.filter(item => typeof item == 'number');
    arr = arr.map(item => Math.pow(item, 2));
    return `The array with the numbers squared is: ${arr}`;
}

console.log(square1([1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']));
console.log(square1([1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));