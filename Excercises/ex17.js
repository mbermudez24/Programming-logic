/*

Given a number, show the numbers from 1 to the number.
But for multiples of 3 print "buzz" instead of the number, and for multiples of 5 print "lightyear".
For multiples of 3 and 5 print "BuzzLightyear".

how to do it:
1. create a function that receives a number
2. conditional to check if the number is multiple of 3 or 5
3. create a function to traverse and display
4. loop from 1 to the number

*/

//classic function
function buzzLightyear1(num){
    let result = '';

    if(num % 3 === 0 && num % 5 === 0){
        result = 'BuzzLightyear';
    }else if(num % 3 === 0){
        result = 'buzz';
    }else if(num % 5 === 0){
        result = 'lightyear';
    }else{
        result = num;
    }
    
    return result;
}

function traverse(num){
    for(let i = 1; i <= num; i++){
        console.log(buzzLightyear1(i));
    }
}

traverse(15);

//prototype function
Number.prototype.buzzLightyear2 = function(){
    let result = '';

    if(this % 3 === 0 && this % 5 === 0){
        result = 'BuzzLightyear';
    }else if(this % 3 === 0){
        result = 'buzz';
    }else if(this % 5 === 0){
        result = 'lightyear';
    }else{
        //this is the number
        result = this;
    }
    
    return result;
}

function traverse2(num){
    for(let i = 1; i <= num; i++){
        console.log(i.buzzLightyear2());
    }
}

//traverse2(15);

