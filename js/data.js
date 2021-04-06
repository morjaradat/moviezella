let allMovies = [
  {
    id:1,
    name : 'The Batman',
    categories :'Action Crime Drama',
    Duration: '2h20m',
    pathIds:'-FZ-pPFAjYY',
    coverImg : 'Batman.jpg',
    actors : ['Robert Pattinson','Andy Serkis','Amber Sienna'],
    caractors : ['BatMan','Alfred Pennyworth','Selina Kyle'],
    views:555,
    rate : 5,
    year : '2021'
  },
  {
    id:2,
    name : 'Dracula Untold',
    categories :'Action Drama Fantasy',
    Duration: '1h32m',
    pathIds:'_2aWqecTTuE',
    coverImg : 'Dracula.jpg',
    actors : ['Luke Evans','Sarah Gadon','Dominic Cooper'],
    views:1000,
    rate : 2,
    year : '2016'
  },
  {
    id:3,
    name : 'The Jungle Book',
    categories :'Adventure Drama Family',
    Duration: '1h40m',
    pathIds:'5mkm22yO-bs',
    coverImg : 'TheJungleBook.jpg',
    actors : ['Neel Sethi','Bill Murray','Ben Kingsley'],
    views:4555,
    rate : 4.6,
    year : '2015'
  },
  {
    id:4,
    name : 'arrival',
    categories :'Drama Sci-Fi',
    Duration: '1h56m',
    pathIds: 'tFMo3UJ4B4g',
    coverImg : 'arrival.jpg',
    actors : ['Amy Adams','Jeremy Renner','Forest Whitaker'],
    views:157,
    rate : 4.2,
    year :'2019'
  },
  {
    id:5,
    name : 'justice league',
    categories :'Action Adventure Fantasy',
    Duration: '2h',
    pathIds: '3cxixDgHUYw',
    coverImg : 'justice-league.jpg',
    actors : ['Ben Affleck	','	Henry Cavill','Amy Adams'],
    views:275,
    rate : 3.1,
    year : 2017
  },
  {
    id:6,
    name : 'detachment',
    categories :'Drama',
    Duration: '1h38m',
    pathIds: 'w7lBleOF9Pw',
    coverImg : 'detachment.jpg',
    actors : ['Adrien Brody','Marcia Gay Harden','James Caan'],
    views:14,
    rate : 4.9,
    year : 2012
  },
  {
    id:7,
    name : 'guardians of the galaxy vol 2',
    categories :'Action Adventure Comedy ',
    Duration: '2h1m',
    pathIds: 'dW1BIid8Osg',
    coverImg : 'guardians-of-the-galaxy-vol2.jpg',
    actors : ['Chris Pratt','Zoe Saldana','Dave Bautista'],
    views:171,
    rate : 3.3,
    year : 2015
  },
  {
    id:8,
    name : 'Pulp Fiction',
    categories :'Action Crime Drama',
    Duration: '2h34m',
    pathIds: '5ZAhzsi1ybM',
    coverImg : 'Pulp-Fiction.jpg',
    actors : ['John Travolta','Samuel L. Jackson','Uma Thurman'],
    views:171,
    rate : 3.3,
    year : 1994
  },
  {
    id:9,
    name : 'The Green Mile',
    categories :'Crime Drama Fantasy  ',
    Duration: '3h9m',
    pathIds: 'Ki4haFrqSrw',
    coverImg : 'The-Green-Mile.jpg',
    actors : ['Tom Hanks','David Morse','Michael Clarke Duncan'],
    views:171,
    rate : 3.3,
    year : 1999
  },
  {
    id:10,
    name : 'The Pianist',
    categories :'Biography Drama Music',
    Duration: '2h30m',
    pathIds: 'BFwGqLa_oAo',
    coverImg : 'The-Pianist.jpg',
    actors : ['Adrien Brody','Emilia Fox','Michal Zebrowski'],
    views:171,
    rate : 3.3,
    year : 2002
  },
  {
    id:11,
    name : 'Joker',
    categories :' Crime Drama Thriller',
    Duration: '2h2m',
    pathIds: '-_DJEzZk2pc',
    coverImg : 'Joker.jpg',
    actors : ['Joaquin Phoenix','Robert De Niro','Zazie Beetz'],
    views:171,
    rate : 3.3,
    year : 2019
  },
  {
    id:12,
    name : 'Capharnaüm',
    categories :'Drama',
    Duration: '2h6m',
    pathIds: 'JBecbs52Fpo',
    coverImg : 'Capharnaüm.jpg',
    actors : ['Zain Al Rafeea','Yordanos Shiferaw','Nadine Labaki'],
    views:171,
    rate : 3.3,
    year : 2018
  },
  {
    id:13,
    name : '1917',
    categories :'Drama Thriller War',
    Duration: '1h59m',
    pathIds: 'YqNYrYUiMfg',
    coverImg : '1917.jpg',
    actors : ['Dean-Charles Chapman	','George MacKay','Daniel Mays'],
    views:171,
    rate : 3.3,
    year : 2019
  },
  {
    id:14,
    name : 'Room',
    categories :'Drama Thriller',
    Duration: '1h58m',
    pathIds: 'E_Ci-pAL4eE',
    coverImg : 'Room.jpg',
    actors : ['Brie Larson','Jacob Tremblay','Sean Bridgers'],
    views:171,
    rate : 3.3,
    year : 2015
  },
  {
    id:15,
    name : 'Inception',
    categories :'Action Adventure Sci-Fi',
    Duration: '2h28m',
    pathIds: 'YoHD9XEInc0',
    coverImg : 'Inception.jpg',
    actors : ['Leonardo DiCaprio','Elliot Page','Tom Hardy'],
    views:171,
    rate : 3.3,
    year : 2010
  },

];
// Movies constructor
function Movies(id,name,category,duration,pathIds,mainImage,year,actors,caractors){
  this.id = id
  this.name = name;
  this.mainImage = `../img/covers/${mainImage}`;
  this.profileImage = `../img/${name.replace(/\s+/g, '-')}.jpg`;
  this.path = pathIds;
  this.category = category;
  this.duration = duration;
  this.actors = actors;
  this.year = year;
  this.caractors=caractors
  this.actors = actors
  this.rate = randomRate(5,1);
  this.views = randomViews(10000,1000);
  Movies.allMovie.push(this);
}
Movies.allMovie = [];

generateMovies()

console.log(Movies.allMovie)

// creating a function that will generate movie objects & assign path & category
function generateMovies(){
  for(let i=0; i<allMovies.length; i++){
    new Movies(allMovies[i].id,allMovies[i].name,allMovies[i].categories,allMovies[i].Duration,allMovies[i].pathIds,allMovies[i].coverImg,allMovies[i].year,allMovies[i].actors,allMovies[i].caractors);
  }
  // console.log(Movies.allMovie);
}
// console.log(Movies.allMovie[0])

// function that generate random views
function randomViews(max,min){
  return this.views = Math.floor(Math.random() * (max - min + 1)) + min;
}
// function that generate random rates
function randomRate(max,min){
  return this.rate = Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(Movies.allMovie[0].name)

// export default {allMovies,Movies.allMovie,generateMovies()}
