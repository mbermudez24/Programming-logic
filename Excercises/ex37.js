/*

given an array or a text, return the elements or words that appear most often. 

how to do it:
1. map elements in a json and create a counter

*/

//classic function
function mostOften1(data){
    let mapping = {},
    moreFrequent = "", 
    valueMoreFrequent = 0;

    if(typeof data == 'string'){
        data = data.split(' ');
    }

    for(let element of data){
        if(mapping[element]){
            mapping[element]++;
        }else{
            mapping[element] = 1;
        }
    }

    for(let element in mapping){
        if(mapping[element] > valueMoreFrequent){
            valueMoreFrequent = mapping[element];
            moreFrequent = element;
        }
    }


    return parseInt(moreFrequent) ? `The element that appears most frequently is: ${moreFrequent} with ${valueMoreFrequent} times` : `the word that appears most frequently is: "${moreFrequent}" with ${valueMoreFrequent} times`; 

}

console.log(mostOften1([1,2,3,4,5,6,7,8,9,1,2,3,4,5,1,2,3,1,2,1]));
console.log(mostOften1("this is a test to see if this works or not this"));

//prototype function
Array.prototype.mostOften2 = function(){
    let mapping = {},
    moreFrequent = "", 
    valueMoreFrequent = 0;

    for(let element of this){
        if(mapping[element]){
            mapping[element]++;
        }else{
            mapping[element] = 1;
        }
    }

    for(let element in mapping){
        if(mapping[element] > valueMoreFrequent){
            valueMoreFrequent = mapping[element];
            moreFrequent = element;
        }
    }

    return parseInt(moreFrequent) ? `The element that appears most frequently is: ${moreFrequent} with ${valueMoreFrequent} times` : `the word that appears most frequently is: "${moreFrequent}" with ${valueMoreFrequent} times`;
}

console.log([1,2,3,4,5,6,7,8,9,1,2,3,4,5,1,2,3,1,2,1].mostOften2());

//arrow function
let mostOften3 = data => {
    let mapping = {},
    moreFrequent = "", 
    valueMoreFrequent = 0;

    if(typeof data == 'string'){
        data = data.split(' ');
    }

    for(let element of data){
        if(mapping[element]){
            mapping[element]++;
        }else{
            mapping[element] = 1;
        }
    }

    for(let element in mapping){
        if(mapping[element] > valueMoreFrequent){
            valueMoreFrequent = mapping[element];
            moreFrequent = element;
        }
    }

    return parseInt(moreFrequent) ? `The element that appears most frequently is: ${moreFrequent} with ${valueMoreFrequent} times` : `the word that appears most frequently is: "${moreFrequent}" with ${valueMoreFrequent} times`;
}

console.log(mostOften3([1,2,3,4,5,6,7,8,9,1,2,3,4,5,1,2,3,1,2,1]));




