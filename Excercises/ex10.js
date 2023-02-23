/*

given a number, display a staircase with steps of "[-]" using the number for the staircase levels

how to do it:
1. create a function that receives the number.
2. Scroll through the number of stairs.
3. at each iteration prints out the steps of that level.
4. loop from 1 to the level we are in.

*/

function staircase(num){
    let ladder = "";

    for(let level =1; level <= num; level++){

        let steps = "";
        for(let step = 1; step <= level; step++){
            steps += "[-]";
        }

        ladder += steps + '\n';
    }
    return ladder;
}

console.log(staircase(5));
