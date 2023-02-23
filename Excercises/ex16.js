/*

given a string, return how many vowels it has

how to do it:
1. create a function that receives a string
2. match method with regular expression
3. return the result

*/

//classic function
function vowels1(str){
    //match method with regular expression to find vowels in the string globally and case insensitive
    const matches = str.match(/[aeiou]/gi);
    //if matches is not null, return the length of matches, otherwise return 0
    return `The string ${str} has ${matches ? matches.length : 0} vowels`;
}

console.log(vowels1('javascript'));

//prototype function
String.prototype.vowels2 = function(){
    //match method with regular expression to find vowels in the string globally and case insensitive
    const matches = this.match(/[aeiou]/gi);
    //if matches is not null, return the length of matches, otherwise return 0
    return `The string ${this} has ${matches ? matches.length : 0} vowels`;
}

console.log('javascript'.vowels2());

