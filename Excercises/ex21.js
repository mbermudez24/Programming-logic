/*

given a string and a number, trim the string showing the first n characters

how to do it:
1. create a function that receives a string and a number
2. check if data is valid
3. trim the string
4. return the result

*/

//classic function
function trimString1(str, num){
    let result = '';
    if(typeof str === 'string' && typeof num === 'number'){
        result = str.slice(0, num);
    }else{
        result = 'Invalid data';
    }
    return result;
}

console.log(trimString1('Riesgo', 3));

//prototype function
String.prototype.trimString2 = function(num){
    let result = '';
    if(typeof this === 'string' && typeof num === 'number'){
        result = this.slice(0, num);
    }else{
        result = 'Invalid data';
    }
    return result;
}

console.log('Riesgo'.trimString2(3));