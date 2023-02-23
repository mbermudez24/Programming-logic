/*

given an array of movie objects (Title, Director, View), display all movies indicating which you have seen and which you have not seen

how to do it:
1. create an array of objects
2. create a function to traverse and display

*/

//classic function
const movies = [
    {title: 'The Matrix', 
    director: 'Wachowski', 
    view: true},

    {title: 'The Matrix Reloaded',
    director: 'Wachowski',
    view: false},
    
    {title: 'The Matrix Revolutions',
    director: 'Wachowski',
    view: true},
    
    {title: 'The Matrix 4',
    director: 'Wachowski',
    view: false},

    {title: 'Justice League',
    director: 'Zack Snyder',
    view: true},

    {title: '007 Spectre',
    director: 'Sam Mendes',
    view: false},

    {title: 'The Avengers',
    director: 'Joss Whedon',
    view: true},

    {title: '007 Skyfall',
    director: 'Sam Mendes',
    view: false},

    {title: 'The Dark Knight',
    director: 'Christopher Nolan',
    view: true},

    {title: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    view: false},

    {title: '007 no time to die',
    director: 'Cary Joji Fukunaga',
    view: true},

    {title: '007 Quantum of Solace',
    director: 'Marc Forster',
    view: false},


];

function displayMovies1(movies){
    //loop through the array
    movies.forEach(movie => {
        //check if the movie has been seen
        if(movie.view){
            console.log(`You have seen "${movie.title}" by ${movie.director}`);
        }else{
            console.log(`You have not seen "${movie.title}" by ${movie.director}`);
        }
    });
}

// displayMovies1(movies);

//prototype function

Array.prototype.displayMovies2 = function(){
    //loop through the array
    this.forEach(movie => {
        //check if the movie has been seen
        if(movie.view){
            console.log(`You have seen "${movie.title}" by ${movie.director}`);
        }else{
            console.log(`You have not seen "${movie.title}" by ${movie.director}`);
        }
    });
}

movies.displayMovies2();