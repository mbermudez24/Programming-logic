/*

given an array of students (name and qualification), show how many students are suspended and how many are approved.

*/

//classic function
function studentsStatusClassic(students){
    let approved = 0;
    let suspended = 0;
    for(student in students){
        if(students[student].qualification >= 5){
            approved++;
        }else{
            suspended++;
        }
    }
    return `There are ${approved} approved students and ${suspended} suspended students`;
}

console.log(studentsStatusClassic([ {name: "Juan", qualification: 5}, {name: "Pedro", qualification: 4}, {name: "Maria", qualification: 6} ]));