/*

given a string, put it all in upper or lower case depending on whether there are more upper or lower case letters in the string.
if there are more upper case letters, put it all in upper case.
if there are more lower case letters, put it all in lower case.

how to do it:
1. create a function that receives a string
2. create 2 counters, one for upper case letters and one for lower case letters
3. traverse the string and count the number of upper and lower case letters
4. increase the counters
5. return the string in upper or lower case depending on the counters and return the result

*/

//classic function
function upperOrLowerCase1(str){
    let upperCase = 0;
    let lowerCase = 0;
    let result = "";

    for(char of str){

        if(/[A-Z]/.test(char)){
            upperCase++;
        }else if(/[a-z]/.test(char)){
            lowerCase++;
        }
        
    }

    if(upperCase > lowerCase){
        result = `The string "${str}" has more upper case letters than lower case letters. The string in upper case is: ${str.toUpperCase()}`;
        
    }else{
        result = `The string "${str}" has more lower case letters than upper case letters. The string in lower case is: ${str.toLowerCase()}`;
        
    }
    return result;
}

console.log(upperOrLowerCase1("HELLO World"));
console.log(upperOrLowerCase1("hello world"));