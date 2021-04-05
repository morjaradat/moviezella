'use strict';

// Global variables:
// event listener element
const playerListener = document.getElementById('allMovies-Container');

// display movie player
function moviePlayer(){
  const moviePlayerContainer = document.getElementById('trailer');
  moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovie[0].mainImage})`;
  moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovie[0].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
}

// function that displays movie objects on screen
function displayMovie(){
  const elMainContainer = document.getElementById('allMovies-Container');
  for(let i=0; i<Movies.allMovie.length; i++){
    const elMovie = document.createElement('div');
    elMovie.setAttribute('class', 'movies-container');
    elMovie.setAttribute('id', `${Movies.allMovie[i].name}`);
    elMainContainer.appendChild(elMovie);
    const elMovieImg = document.createElement('img');
    elMovieImg.src = `${Movies.allMovie[i].profileImage}`;
    elMovieImg.alt = `${Movies.allMovie[i].name}`;
    elMovie.appendChild(elMovieImg);
    const elMovieTitle = document.createElement('span');
    elMovieTitle.textContent = Movies.allMovie[i].name;
    elMovie.appendChild(elMovieTitle);
    const elCategory = document.createElement('span');
    elCategory.textContent = Movies.allMovie[i].category;
    elMovie.appendChild(elCategory);
  }
}

// displaying thr trailer when clicked on video image
playerListener.addEventListener('click', (event)=> {
  // console.log(event.path[1].id);
  // console.log(Movies.allMovies[moviesNames.indexOf(event.target.alt)]);
  if(event.target.id !== 'allMovies-Container'){
    const moviePlayerContainer = document.getElementById('trailer');
    moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovie[multiIndexOf(event.path[1].id)].mainImage})`;
    moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovie[multiIndexOf(event.path[1].id)].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
    topFunction();
  }
});

// function that will cause the window to scroll all the way up
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// getting the index in objects:
function multiIndexOf(index){
  for(let i=0; i<Movies.allMovie.length; i++){
    if(Movies.allMovie[i].name === index){
      return i;
    }
  }
}

// calling out functions
moviePlayer();
displayMovie();
// console.log(Movies.allMovie);
