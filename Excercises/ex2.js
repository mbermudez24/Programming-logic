/*

Given a text string, check whether it is a palindrome or not. Palindromes are words that read the same even if they are inverted. For example: ana, bob, otto, etc.

Disregard spaces or unusual symbols

how to do it:
1. create a function that receives a string
2. Separate the string into an array of characters
3. Reverse the array
4. Join the array into a string and compare it with the original string
5. Return the result

*/

function isPalindrome(string){
    
    let reversedString = string.split('').reverse().join('');
    if(string === reversedString){
        return `Is palindrome`;
    }else{
        return `Is not palindrome`;
    }
    
}

console.log(isPalindrome('ana'));