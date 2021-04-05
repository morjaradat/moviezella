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
    const elImgContainer = document.createElement('div');
    elImgContainer.setAttribute('class','img-container');
    elMovie.appendChild(elImgContainer);
    const elMovieImg = document.createElement('img');
    elMovieImg.src = `${Movies.allMovie[i].profileImage}`;
    elMovieImg.alt = `${Movies.allMovie[i].name}`;
    elImgContainer.appendChild(elMovieImg);
    const elDetails = document.createElement('div');
    elDetails.setAttribute('class', 'details');
    elMovie.appendChild(elDetails);
    const elMovieTitle = document.createElement('h4');
    elMovieTitle.setAttribute('class','title');
    elMovieTitle.textContent = Movies.allMovie[i].name;
    elDetails.appendChild(elMovieTitle);
    const elCategory = document.createElement('div');
    elCategory.setAttribute('class','category');
    elCategory.textContent = `${Movies.allMovie[i].category}`;
    elMovie.appendChild(elCategory);
    const elRate = document.createElement('div');
    elRate.setAttribute('class','rate');
    elRate.textContent = `rate : ${Movies.allMovie[i].rate}`;
    elMovie.appendChild(elRate);
    const elView = document.createElement('div');
    elView.setAttribute('class','view');
    elView.textContent = `views : ${Movies.allMovie[i].views}`;
    elMovie.appendChild(elView);
  }
}

// displaying thr trailer when clicked on video image
playerListener.addEventListener('click', (event)=> {
  console.log(event.target.alt);
  // console.log(Movies.allMovies[moviesNames.indexOf(event.target.alt)]);
  if(event.target.id !== 'allMovies-Container'){
    const moviePlayerContainer = document.getElementById('trailer');
    moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovie[multiIndexOf(event.target.alt)].mainImage})`;
    moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovie[multiIndexOf(event.target.alt)].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
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
