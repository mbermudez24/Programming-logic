/*

given a number,  show how many years, months and days it is equal to

how to do it:
1. create a function that receives a number
2. divisions to get the years, months and days
3. return the result

*/

//classic function
function yearsMonthsDays1(num){
    let years = Math.floor(num / 365);
    let months = Math.floor((num % 365) / 30);
    let days = Math.floor((num % 365) % 30);
    return `${num} days are equal to ${years} years, ${months} months and ${days} days`;
}

console.log(yearsMonthsDays1(365));
console.log(yearsMonthsDays1(400));