/*

given a string of text return the most used character

how to do it:
1. create a function that receives a string
2. map letters to a json object
3. walk through the mapping
4. we make a condition to see which counter is higher
*/

//classic function
function mostUsedChar1(str){
    let mapping = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(mapping[char]){
            mapping[char]++;
        }else{
            mapping[char] = 1;
        }
    }

    for(let char in mapping){
        if(mapping[char].toString().trim().length === 1 && mapping[char] > max){
            max = mapping[char];
            maxChar = char;
        }
    }

    return `The most used character is ${maxChar} and it was used ${max} times`;
}

console.log(mostUsedChar1('javascript'));

//prototype function
String.prototype.mostUsedChar2 = function(){
    let mapping = {};
    let max = 0;
    let maxChar = '';

    for(let char of this){
        if(mapping[char]){
            mapping[char]++;
        }else{
            mapping[char] = 1;
        }
    }

    for(let char in mapping){
        if(mapping[char].toString().trim().length === 1 && mapping[char] > max){
            max = mapping[char];
            maxChar = char;
        }
    }

    return `The most used character is ${maxChar} and it was used ${max} times`;
}

console.log('JAVASCRIPT'.mostUsedChar2());
