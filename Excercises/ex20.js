/*

given 2 strings, create an algorithm to check if are anagrams of each other

anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

do not have into account spaces, rare symbols,points , etc.

how to do it:
1. create a function to clean the strings
2. remove all non-text
3. convert to lowercase
4. create an array of characters
5. sort the array
6. join the array
7. create a function to compare the strings
*/

//classic function
function cleanString1(str){
    //remove all non-text characters, convert to lowercase, split into an array of characters, sort the array, join the array
    return str.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('');
}

function isAnagram1(str1, str2){
    return cleanString1(str1) === cleanString1(str2);
}

console.log(isAnagram1('Riesgo', 'Sergio'));


//prototype function
String.prototype.cleanString2 = function(){
    return this.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('');
}

String.prototype.isAnagram2 = function(str){
    return this.cleanString2() === str.cleanString2();
}

console.log('Riesgo'.isAnagram2('Sergio'));