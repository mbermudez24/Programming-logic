/*

given a number, show a triangle with asterisks with the number of rows equal to the number given.

*/

//classic function
function triangleClassic(number){
    let middle = Math.floor(number -1);
    let result = "";

    //loop number of rows
    for(let row = 0; row < number; row++){
        let level = "";
        //loop number of columns
        for(let column = 0; column < (2 * number - 1); column++){

            if(middle - row <= column && middle + row >= column){
                level += "*";
            }else{
                level += " ";
            }

        }
        result += level + "\n";
    }

    return result;
}

console.log(triangleClassic(5));
