'use strict';

// Global variables:
// Movies names:
let moviesNames = ['arrival', 'justice-league', 'detachment', 'guardians-of-the-galaxy-vol2'];
// Path Ids:
let pathIds = ['tFMo3UJ4B4g', '3cxixDgHUYw', 'w7lBleOF9Pw', 'dW1BIid8Osg'];
// event listener element
const playerListener = document.getElementById('allMovies-Container');

// Movies constructor
function Movies(name){
  this.name = name;
  this.mainImage = `../img/main${name}.jpg`;
  this.profileImage = `../img/${name}.jpg`;
  this.path = '';
  this.category = '';
  Movies.allMovies.push(this);
}
Movies.allMovies = [];

// creating a function that will generate movie objects
function generateMovies(){
  for(let i=0; i<moviesNames.length; i++){
    new Movies(moviesNames[i]);
    Movies.allMovies[i].path = pathIds[i];
  }
}
// generateMovies();
// console.log(Movies.allMovies);

// display movie player
function moviePlayer(){
  const moviePlayerContainer = document.getElementById('movie-player');
  moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovies[0].mainImage})`;
  moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovies[0].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
}

// function that displays movie objects on screen
function displayMovie(){
  const elMainContainer = document.getElementById('allMovies-Container');
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
    const link = document.createElement('a');
    link.setAttribute('href', '#preview');
    link.textContent = Movies.allMovies[i].name;
    elMovieTitle.appendChild(link);
    elMovie.appendChild(elMovieTitle);
  }
}

// displaying thr trailer when clicked on video image
playerListener.addEventListener('click', (event)=> {
  // console.log(event.target.id);
  // console.log(Movies.allMovies[moviesNames.indexOf(event.target.alt)]);
  if(event.target.id !== 'allMovies-Container'){
    const moviePlayerContainer = document.getElementById('movie-player');
    moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovies[moviesNames.indexOf(event.target.alt)].mainImage})`;
    moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovies[moviesNames.indexOf(event.target.alt)].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
  }
});

// calling out functions
generateMovies();
moviePlayer();
displayMovie();


