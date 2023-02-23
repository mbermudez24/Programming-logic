/*

given an array of integers and a number,  detect if this list of numbers is a permutation from 1 to n

permutation: a set or number of things, especially one of all possible variations of a particular thing

example: [1, 2, 3, 4] is a permutation from 1 to 4

how to do it:
1. create a function that receives an array of integers and a number
2. loop from 0 to n
3. return false if the actual number +1, is not in the array
4. return true if the loop is done


*/

//classic function
function permutation1(arr, n){
    let result = true;
    for(let i = 0; i < n; i++){
        //indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
        //if the actual number +1, is not in the array, indexOf() will return -1
        if(arr.indexOf(i + 1) === -1){
            result = false;
        }
    }
    return result;
}

console.log(permutation1([1, 2, 3, 4], 4));

//prototype function
Array.prototype.permutation2 = function(n){
    let result = true;
    for(let i = 0; i < n; i++){
        if(this.indexOf(i + 1) === -1){
            result = false;
        }
    }
    return result;
}

console.log([1, 2, 3, 4].permutation2(4));
