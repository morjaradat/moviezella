'use strict';

// Global variables:
// event listener element
const playerListener = document.getElementById('allMovies-Container');

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
    elMovieTitle.textContent = Movies.allMovies[i].name;
    elMovie.appendChild(elMovieTitle);
    const elCategory = document.createElement('span');
    elCategory.textContent = Movies.allMovies[i].category;
    elMovie.appendChild(elCategory);
  }
}

// displaying thr trailer when clicked on video image
playerListener.addEventListener('click', (event)=> {
  // console.log(event.target.alt);
  // console.log(Movies.allMovies[moviesNames.indexOf(event.target.alt)]);
  if(event.target.id !== 'allMovies-Container'){
    const moviePlayerContainer = document.getElementById('movie-player');
    moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovies[moviesNames.indexOf(event.target.alt)].mainImage})`;
    moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovies[moviesNames.indexOf(event.target.alt)].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
    topFunction();
  }
});

// function that will cause the window to scroll all the way up
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// calling out functions
// generateMovies();
// moviePlayer();
// displayMovie();
