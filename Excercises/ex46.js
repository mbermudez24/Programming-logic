/*

given a string, returns all possible substrings 

ej: "abc" -> ["a", "ab", "abc", "b", "bc", "c"]

*/

//classic function
function substringsClassic(str){
    let substrings = [];
    for(let i = 0; i < str.length; i++){
        for(let j = i; j < str.length; j++){
            substrings.push(str.substring(i, j+1));
        }
    }
    return substrings;
}

console.log(substringsClassic("abc"));