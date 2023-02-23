/*

Given an array of objects, return which are the most common hobbies of the users.

example:

const users = [ {name: "Juan", hobbies: ["sports", "music"]}, {name: "Pedro", hobbies: ["sports", "music"]}, {name: "Maria", hobbies: ["sports", "music", "reading"]} ]

output:

sports: 3
music: 3
reading: 1


*/

//classic function
function mostCommonHobbiesClassic(users){
    let hobbies = {};
    for(user in users){
        for(hobby in users[user].hobbies){
            if(hobbies[users[user].hobbies[hobby]]){
                hobbies[users[user].hobbies[hobby]]++;
            }else{
                hobbies[users[user].hobbies[hobby]] = 1;
            }
        }
    }
    return hobbies;
}

console.log(mostCommonHobbiesClassic([ {name: "Juan", hobbies: ["sports", "music"]}, {name: "Pedro", hobbies: ["sports", "music"]}, {name: "Maria", hobbies: ["sports", "music", "reading"]} ]));