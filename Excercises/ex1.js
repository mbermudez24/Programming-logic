/*
Multiplication Table:

Create a function that, given a number, returns its multiplication table.

How to do it:
1. Create a function that receives a number
2. Create a variable that stores the multiplication table
3. Create a loop that iterates from 1 to 10
4. Multiply the number by the iteration number
5. Add the result to the multiplication table
6. Return the multiplication table

*/

function multiplyingTable(number){
    let result = `Tabla del ${number}: \n`;
    for(let i = 1; i <= 10; i++){
        let product = number * i;
        result += ` ${number} x ${i} = ${product} \n`
    }
    return result;
}

console.log(multiplyingTable(5));