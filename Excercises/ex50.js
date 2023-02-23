/*

given a number, return how many loops it has.
a number has a loop when it has a closed circle when you draw it. 
6 has a loop, 8 has a loop, 9 has a loop, 0 has a loop, 2 has a loop, 3 has a loop, 4 has a loop, 5 has a loop, 7 has not a loop.
*/

//classic function
function loopsClassic(num){
    let arrayNum = num.toString().split("");
    let loops = 0;

    for(num of arrayNum){
        num = parseInt(num);
        if(num == 0 || num == 6 || num == 9){
            loops ++;
        }else if(num === 8){
            loops += 2;
        }

    }

    return loops;

}

console.log(loopsClassic(288));