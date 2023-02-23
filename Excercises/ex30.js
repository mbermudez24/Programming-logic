/*

given an array of numbers, return the array without the duplicates.
if there is an string remove it from the array

how to do it:
1. create a function that receives an array
2. traverse the array and remove the strings
3. use objects to remove duplicates
4. return the result

*/

//classic function
function removeDuplicates1(arr){
    arr = arr.filter(item => typeof item == 'number');
    let set_without_duplicates = new Set(arr);
    return `The array without duplicates is: ${[...set_without_duplicates]}`;

}
console.log(removeDuplicates1([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']));

//prototype function
Array.prototype.removeDuplicates2 = function(){
    this.filter(item => typeof item == 'number');
    let set_without_duplicates = new Set(this);
    return `The array without duplicates is: ${[...set_without_duplicates]}`;
}

console.log([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].removeDuplicates2());