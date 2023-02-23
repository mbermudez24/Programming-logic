/*

given an array, split it into as many sub-arrays as necessary based on a number indicating its size.
split it into arrays of x elements

how to do it:
1. create a function that receives an array and a number.
2. create an array
3. traverse the array and add sub-arrays
*/

function splitArray(arr, num){
    let result = [];

    for(let i = 0; i < arr.length; i+=num){

        //slice(start, end) end is not included.
        //slice(3, 6) -> [3, 4, 5]
        //slice returns a new array with the elements from start to end. for example, slice(i= 0,i(=0)+num(=3) = 3) returns [0, 1, 2]
        result.push(arr.slice(i, i+num));
    }
    return result;
    
}


//another way to do it not using slice
function splitArrayNormal(arr, num){
    let result = [];

    for(let element of arr){
        let last = result[result.length - 1];

        if(!last || last.length === num){
            result.push([element]);
        }else{
            last.push(element);
        }

    }

    return result;
}

console.log(splitArray([1,2,3,4,5,6,7,8,9,10], 3));