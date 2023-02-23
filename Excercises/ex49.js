/*

given an object, check if a specific property exists

*/

//classic function
function propertyExists(obj, property){
    return typeof obj === "object" && typeof property === "string" && obj.hasOwnProperty(property) ;
}

console.log(propertyExists({name: "Juan"}, "name"));