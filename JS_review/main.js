let name = "John";
let height = 74 //inches;
let currentYear = 2023;
let birthYear = 2001;
let concatenation = name + " is " + height + " inches tall";

document.getElementById("data").innerHTML 
=`<h2> ${concatenation} </h2>
`;

if (height < 60) {
    document.getElementById("data").innerHTML += `
    <h3> John is short</h3>`;
} else if (height > 60 && height < 80) {
    document.getElementById("data").innerHTML += `
    <h3> John is average</h3>`;
}

for (var i = 0; i <= 2023; i++) {
    if (i >= 2001) {
        document.getElementById("data").innerHTML += `
    <h4> we are in the year  ${i} </h4>`;
    } else {
    
    }
}

function ShowMyAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    document.getElementById("data").innerHTML += `<h2>John is ${age} years old</h2>`;
}

ShowMyAge(birthYear, currentYear);

document.write('<h1> list of names and heights </h1>')
let names = ["Jamie", "Jane", "Jim", "Jill"];
let heights = [55, 65, 70, 60];

/*
for (var i = 0; i < names.length; i++) {
    document.write(`<h2> ${names[i]} is ${heights[i]} inches tall </h2>`);
}
*/
names.forEach((name, index) => {
    document.write(`<h2> ${name} is ${heights[index]} inches tall </h2>`);
});

var car = {
    model: 'Mercedes Class A',
    maximum: 500,
    antiquity: 2020,
    showData(){
        console.log(this.model, this.maximum, this.antiquity);

    },
    property: "value"
};

document.write("<h1>"+car.model+"</h1>");
car.showData();

var greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        let greet = "Hello World";
        if (greet) {
            resolve(greet);
        }else{
            reject("Error");
        }
    }, 2000);
});

greeting.then((result) => {
    alert(result);
})
.catch((error) => {
    alert(error)
});