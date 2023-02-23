/*

given a number show all the numbers from that number to 0 from 8 to 8 in a list with dashes where each number must start with given a number show all the numbers from that number to 0 from 8 to 8 in a list with dashes where each number must start with n°

how to do it:

1. create a function that receives the number.
2. initialize variable with header.
3. loop from the number to 0.
4. concatenate dashes, n°, number and line break
5. subtract 8
6. concatenate "END"

*/

function countdown(num){
    let result = 
    `---Countdown: from ${num} to 0---- \n`;
    for(let i = num; i >= 0; i-=8){
        result += `n° ${i}\n`;
    }
    if(num % 8 != 0){
        result += `n° 0 \n`;
    }
    result += "END";
    return result;
}

console.log(countdown(987));