'use strict';
// scroll styles for navigation bar
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky2', window.scrollY > 485);
});

// Global variables:
// event listener element
const playerListener = document.getElementById('allMovies-Container');

// display movie player
function moviePlayer(){
  const moviePlayerContainer = document.getElementById('trailer');
  moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovie[0].mainImage})`;
  moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovie[0].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
}

// function that displays movie cards on screen
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

    const elDetails = document.createElement('div');
    elDetails.setAttribute('class', 'details');
    elDetails.innerHTML = `<i id = "${Movies.allMovie[i].name}" class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="display">
    </i>`;
    elMovie.appendChild(elDetails);

    const elMovieTitle = document.createElement('h5');
    elMovieTitle.setAttribute('class','title');
    elMovieTitle.textContent = Movies.allMovie[i].name;
    elDetails.appendChild(elMovieTitle);

    const elCategory = document.createElement('span');
    elCategory.setAttribute('class','category');
    elCategory.textContent = `${Movies.allMovie[i].category}`;
    elDetails.appendChild(elCategory);

    const elRandoms = document.createElement('div');
    elRandoms.setAttribute('class', 'randoms');
    elDetails.appendChild(elRandoms);
    const elView = document.createElement('span');
    elView.setAttribute('class','view');
    elView.textContent = `views:${Movies.allMovie[i].views}`;
    elRandoms.appendChild(elView);
    const elRate = document.createElement('span');
    elRate.setAttribute('class','rate');
    elRate.innerHTML = `<i class="fas fa-star"></i> ${Movies.allMovie[i].rate} / 5`;

    elRandoms.appendChild(elRate);
    const elTime = document.createElement('div');
    elTime.setAttribute('class', 'time');
    elDetails.appendChild(elTime);
    const elYear =document.createElement('span');
    elYear.setAttribute('class', 'year');
    elYear.textContent = `${Movies.allMovie[i].year}`;
    elTime.appendChild(elYear);
    const elDuration = document.createElement('span');
    elDuration.setAttribute('class', 'duration');
    elDuration.textContent = `${Movies.allMovie[i].duration}`;
    elTime.appendChild(elDuration);

    const elBtn = document.createElement('div');
    elBtn.setAttribute('class','btn');
    elBtn.innerHTML = '<button class="watchlist"><i class="fas fa-file-medical"></i></button><button class="view-profile"><i class="fas fa-book-open"></i></button>';
    elMovie.appendChild(elBtn);
  }
}

// displaying thr trailer when clicked on video image
playerListener.addEventListener('click', (event)=> {
  // console.log(event.target.id);
  // console.log(Movies.allMovies[moviesNames.indexOf(event.target.alt)]);
  if(event.target.id !== 'allMovies-Container'){
    const moviePlayerContainer = document.getElementById('trailer');
    moviePlayerContainer.style.backgroundImage = `url(${Movies.allMovie[multiIndexOf(event.target.id)].mainImage})`;
    moviePlayerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${Movies.allMovie[multiIndexOf(event.target.id)].path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`;
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

// add to watch list !!
let addToWatchList = document.getElementsByClassName('watchlist');

for(let i = 0; i<addToWatchList.length; i++){
  addToWatchList[i].addEventListener('click', toWatchList);
}

let favorite = [];
function toWatchList(event){
  // console.log(event.path[3].id);
  // // console.log(Movies.allMovie[multiIndexOf(event.path[2].id)]);
  favorite.push(Movies.allMovie[multiIndexOf(event.path[3].id)]);
  localStorage.setItem('watchList', JSON.stringify(favorite));
}

// preview infos
let previewMovie = document.getElementsByClassName('view-profile');

for(let i = 0; i<previewMovie.length; i++){
  previewMovie[i].addEventListener('click', viewMovieinfo);
}

function viewMovieinfo(event){
  // console.log(event.path[3].id);
  let preview = Movies.allMovie[multiIndexOf(event.path[3].id)].id;
  localStorage.setItem('profileId', preview);
  window.location = '../pages/movieProfile.html';
}
