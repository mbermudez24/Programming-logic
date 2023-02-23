/*

given a number, indicate if it is a capicua number or not

capicua number is a number that is the same when it is read from left to right and from right to left

for example: 121, 12321, 1234321

how to do it:
1. create a function that receives a number
2. convert to string
3. convert number to array of numbers
4. reverse the array
5. join the array and convert to integer
6. compare the number received with the reversed number
7. return the result

*/

//classic function
function capicua1(num){
    let processedNum = parseInt(num.toString().split('').reverse().join(''));
    return num == processedNum ? `${num} is a capicua number` : `${num} is not a capicua number`;
}

console.log(capicua1(123));
console.log(capicua1(121));

//prototype function
Number.prototype.capicua2 = function(){
    let processedNum = parseInt(this.toString().split('').reverse().join(''));
    return this == processedNum ? `${this} is a capicua number` : `${this} is not a capicua number`;
}

console.log((123).capicua2());

//arrow function
let capicua3 = num => {
    let processedNum = parseInt(num.toString().split('').reverse().join(''));
    return num == processedNum ? `${num} is a capicua number` : `${num} is not a capicua number`;
}

console.log(capicua3(123));