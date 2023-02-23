/*

Given a text, return how many consonants and vowels are in it.

Example:
Input: "Hello World"
Output: 7 consonants, 3 vowels

how to do it:
1. create a function that receives a text
2. trasverse each character of the text
3. test with a regular expression
4. return the result
*/

//classic function
function consonantsVowels1(text){
    let consonants = 0;
    let vowels = 0;
    for(let i = 0; i < text.length; i++){
        if(/[bcdfghjklmnpqrstvwxyz]/gi.test(text[i])){
            consonants++;
        }else if(/[aeiou]/gi.test(text[i])){
            vowels++;
        }
    }
    return `The text "${text}" has ${consonants} consonants and ${vowels} vowels`;
}

console.log(consonantsVowels1("Hello World"));

//second way (isnt working :/)
/*
function consonantsVowels2(text){
    let consonants = 0, vowels = 0, textCleaned = "";
    
    textCleaned = text
    .split("")
    .Filter((letter) => {/[áéíóú\w]/gi.test(letter) && isNaN(letter) ;
    })
    .join("");

    for(let letter of textCleaned){
        if(/[bcdfghjklmnpqrstvwxyz]/gi.test(letter)){
            consonants++;
        }else if(/[áéíóúaeiou]/gi.test(letter)){
            vowels++;
        }
    }

    return `The text "${text}" has ${consonants} consonants and ${vowels} vowels`;
}

console.log(consonantsVowels2("Hello World"));
*/