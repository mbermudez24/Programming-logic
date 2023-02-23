/*

given a string, capitalize the first letter of each word and return the result

how to do it:
1. create a function that receives a string
2. capitalize the first letter of each word
3. transverse the string
4. return the result

*/

//classic function
function capitalize1(str){
    let result = '';
    if(typeof str === 'string'){
        result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }else{
        result = 'Invalid data';
    }
    return result;
}

console.log(capitalize1('hello world'));
