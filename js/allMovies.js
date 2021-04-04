'use strict';

// Global variables:
// Movies names:
const moviesNames = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5'];

// Movies constructor
function Movies(name){
  this.name = name;
  this.mainImage = `../img/${name}.png`;
  this.profileImage = `../img/min${name}.png`;
  this.path = `${name}`;
  this.category;
  Movies.allMovies.push(this);
}
Movies.allMovies = [];

// creating a function that will generate movie objects
function generateMovies(){
  for(let i=0; i<moviesNames.length; i++){
    new Movies(moviesNames[i]);
  }
}
// generateMovies();
// console.log(Movies.allMovies);

// function that displays movie objects on screen
function displayMovie(){
  const elMain = document.getElementsByTagName('main')[0];
  const elMainContainer = document.createElement('div');
  elMain.appendChild(elMainContainer);
  elMainContainer.setAttribute('id', 'allMovies-Container');
  for(let i=0; i<moviesNames.length; i++){
    const elMovie = document.createElement('div');
    elMovie.setAttribute('class', 'movies-container');
    elMovie.setAttribute('id', `${Movies.allMovies[i].name}`);
    elMainContainer.appendChild(elMovie);
    const elMovieImg = document.createElement('img');
    elMovieImg.src = `${Movies.allMovies[i].profileImage}`;
    elMovieImg.alt = `${Movies.allMovies[i].name}`;
    elMovie.appendChild(elMovieImg);
    const elMovieTitle = document.createElement('span');
    elMovieTitle.textContent = Movies.allMovies[i].name;
    elMovie.appendChild(elMovieTitle);
  }
}
generateMovies();
displayMovie();


