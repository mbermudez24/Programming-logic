/*
Draw a hollow square with asterisks. 

Example:
Input: 5
Output:
*****
*   *
*   *
*   *
*****

How to do it:
1. create a function to make the top and down sides of the square.
2. create a function to make the sides of the square and the spaces in the middle.
3. loop from 0 to the side size minus 2 to balance with the top and bottom sides.
4. loop to print the spaces minus 2 to balance with the asterisk from the sides.
5.  Concatenating each line of the square in a variable.
6.show the square in the principal function.


*/

function side(number){
    let side = "";
    for(let i = 0; i < number; i++){
        side += "*";
    }

    return side;
}

function square(number){
    // top side
    let draw = side(number) + "\n";

    let content = "";

    // middle sides

    for(let i = 0; i < (number - 2); i++){
        
        content = "*";

        // middle sides (holes)

        for(let x = 0; x < number-2; x++){
            content += " ";
        }

        content += "*";
        
        // add the row to the square
        draw += content + "\n";
    }

    // bottom side
    draw += side(number);

    return draw;
}

console.log(square(50));