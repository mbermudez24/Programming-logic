/*

given an array of numbers, return a new array with the odd and even numbers

*/

//classic function
function oddEvenClassic(numbers){

    return {
        odd: numbers.filter(number => number % 2 != 0),
        even: numbers.filter(number => number % 2 == 0)
    }

}

console.log(oddEvenClassic([1,2,3,4,5,6,7,8,9,10]));