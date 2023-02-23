/*

given an array of strings, return another array with the values that are  formed by 2 or more words.

example: ["hello world", "hello", "hello world hello"] -> ["hello world", "hello world hello"]


*/

//classic function
function twoOrMoreWordsClassic(strings){
    let result = [];
    for(word in strings){
        if(strings[word].split(" ").length > 1){
            result.push(strings[word]);
        }
    }
    return result;
}

console.log(twoOrMoreWordsClassic(["hello world", "hello", "hello world hello"]));
console.log(twoOrMoreWordsClassic(["hello world", "hello", "hello world hello", "hello world hello world"]));

//arrow function
const twoOrMoreWordsArrow = strings => {
    let result = [];
    for(word in strings){
        if(strings[word].split(" ").length > 1){
            result.push(strings[word]);
        }
    }
    return result;
}

console.log(twoOrMoreWordsArrow(["hello world", "hello", "hello world hello"]));
console.log(twoOrMoreWordsArrow(["hello world", "hello", "hello world hello", "hello world hello world"]));