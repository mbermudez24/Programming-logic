/*

given a string, return the letters that appear just once and the first one.

*/

//classic function
function firstUniqueLetterClassic(str){
    let letters = {};
    for(letter in str){
        if(letters[str[letter]]){
            letters[str[letter]]++;
        }else{
            letters[str[letter]] = 1;
        }
    }
    for(letter in letters){
        if(letters[letter] == 1){
            return letter;
        }
    }
}

console.log(firstUniqueLetterClassic("abac"));