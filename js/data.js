let allMovies = [
  {
    id:1,
    name : 'The Batman',
    categories :'Action Crime Drama',
    Duration: '2h20m',
    pathIds:'-FZ-pPFAjYY',
    coverImg : 'Batman.jpg',
    views:555,
    rate : 5
  },
  {
    id:2,
    name : 'Dracula Untold',
    categories :'Action Drama Fantasy',
    Duration: '1h32m',
    pathIds:'_2aWqecTTuE',
    coverImg : 'Dracula.jpg',
    views:1000,
    rate : 2
  },
  {
    id:3,
    name : 'The Jungle Book',
    categories :'Adventure Drama Family',
    Duration: '1h40m',
    pathIds:'5mkm22yO-bs',
    coverImg : 'TheJungleBook.jpg',
    views:4555,
    rate : 4.6
  },
  {
    id:4,
    name : 'arrival',
    categories :'Drama Sci-Fi',
    Duration: '1h56m',
    pathIds: 'tFMo3UJ4B4g',
    coverImg : 'arrival.jpg',
    views:157,
    rate : 4.2
  },
  {
    id:5,
    name : 'justice league',
    categories :'Action Adventure Fantasy',
    Duration: '2h',
    pathIds: '3cxixDgHUYw',
    coverImg : 'justice-league.jpg',
    views:275,
    rate : 3.1
  },
  {
    id:6,
    name : 'detachment',
    categories :'Drama',
    Duration: '1h38m',
    pathIds: 'w7lBleOF9Pw',
    coverImg : 'detachment.jpg',
    views:14,
    rate : 4.9
  },
  {
    id:7,
    name : 'guardians of the galaxy vol 2',
    categories :'Action Adventure Comedy ',
    Duration: '2h1m',
    pathIds: 'dW1BIid8Osg',
    coverImg : 'guardians-of-the-galaxy-vol2.jpg',
    views:171,
    rate : 3.3
  },

];
// Movies constructor
function Movies(name,category,duration,pathIds,mainImage,profileImage,actors){
  this.name = name;
  this.mainImage = `../img/covers/${mainImage}`;
  this.profileImage = `../img/${name.replace(/\s+/g, '-')}.jpg`;
  this.path = pathIds;
  this.category = category;
  this.duration = duration;
  this.actors = actors;
  this.rate = randomRate(5,1);
  this.views = randomViews(10000,1000);
  Movies.allMovie.push(this);
}
Movies.allMovie = [];

// creating a function that will generate movie objects & assign path & category
function generateMovies(){
  for(let i=0; i<allMovies.length; i++){
    new Movies(allMovies[i].name,allMovies[i].categories,allMovies[i].Duration,allMovies[i].pathIds,allMovies[i].coverImg);
  }
  // console.log(Movies.allMovie);
}

// function that generate random views
function randomViews(max,min){
  return this.views = Math.floor(Math.random() * (max - min + 1)) + min;
}
// function that generate random rates
function randomRate(max,min){
  return this.rate = Math.floor(Math.random() * (max - min + 1)) + min;
}

generateMovies();

// export default {allMovies,Movies.allMovie,generateMovies()}
