/*
given an array of numbers, return de average of them

example: [1, 2, 3, 4, 5] -> 3
*/

//classic function
function averageClassic(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return `the average is ${total / numbers.length}`;
}

console.log(averageClassic([1, 2, 3, 4, 5]));

//another way
function averageClassic2(numbers){
    let addition = numbers.reduce((total, ActualNumber) => total + ActualNumber);
    return `the average is ${addition / numbers.length}`;
}

console.log(averageClassic2([1, 2, 3, 4, 5]));

//arrow function
const averageArrow = numbers => {
    let addition = numbers.reduce((total, ActualNumber) => total + ActualNumber);
    return `the average is ${addition / numbers.length}`;
}

console.log(averageArrow([1, 2, 3, 4, 5]));