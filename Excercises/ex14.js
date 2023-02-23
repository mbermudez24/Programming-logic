/*

given a string and a number, repeat the string as many times as the number indicates

how to do it:
1. create a function that receives a string and a number
2. loop to the number 
3. concatenate the string

*/

//classic function
function repeatString1(str, num){
    let result = '';

    for(let i = 0; i < num; i++){
        result += str;
    }

    return result;
}

console.log(repeatString1('abc', 3));


//prototype function
String.prototype.repeatString2 = function(num){
    let result = '';

    for(let i = 0; i < num; i++){
        result += this;
    }

    return result;
}

console.log('abc'.repeatString2(3));
