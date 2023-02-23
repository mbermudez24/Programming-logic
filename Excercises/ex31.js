/*

given a number, indicate what type of angle it is

right angle: 90 degrees
obtuse angle: more than 90 degrees
acute angle: less than 90 degrees
line: 180 degrees


how to do it:
1. create a function that receives a number
2. conditions to determine the type of angle
3. return the result

*/

//classic function
function angle1(num){
    if(num == 90){
        return 'it is a right angle';
    }else if(num > 90 && num < 180){
        return 'it is an obtuse angle';
    }else if(num < 90){
        return 'it is an acute angle';
    }else if(num == 180){
        return 'it is a line angle';
    }else{
        return 'it is a concave angle';
    }
}

console.log(angle1(90));
console.log(angle1(91));
console.log(angle1(89));
console.log(angle1(180));
console.log(angle1(181));

//prototype function
Number.prototype.angle2 = function(){
    if(this == 90){
        return 'it is a right angle';
    }else if(this > 90 && this < 180){
        return 'it is an obtuse angle';
    }else if(this < 90){
        return 'it is an acute angle';
    }else if(this == 180){
        return ' it is a line angle';
    }else{
        return 'it is a concave angle';
    }
}

console.log((90).angle2());