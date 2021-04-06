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
    intro:'Eight years after the Jokers reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.',
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
    caractors : ['Vald','Mirena','Mehmed'],
    intro: 'As his kingdom is being threatened by the Turks, young prince Vlad Tepes must become a monster feared by his own people in order to obtain the power needed to protect his own family, and the families of his kingdom',
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
    caractors: ['Mowgii','Baloo','Bagheera'],
    intro:'After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo.',
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
    caractors:['Louise Banks','Ian Donnelly','Colonel Weber'],
    intro:'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
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
    caractors: ['Bruce Wayne','Clark Kent','Lois Lane'],
    intro:'Fueled by his restored faith in humanity and inspired by Supermans selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.',
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
    caractors:['Henry Barthes','Carol Dearden','Charles Seaboldt'],
    intro:'A substitute teacher who drifts from classroom to classroom finds a connection to the students and teachers during his latest assignment.',
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
    caractors:['Star-Lord','Gamora','Drax'],
    intro:'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lords encounter with his father the ambitious celestial being Ego.',
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
    caractors: ['Vincent Vega','Jules Winnfield','Mia Wallace'],
    intro:'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
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
    caractors:['Paul Edgecomb','Brutus Howell','John Coffey'],
    intro:'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
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
    caractors:['Wladyslaw Szpilman','Dorota','Jurek'],
    intro:'A Polish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
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
    caractors:['Arthur Fleck','Murray Franklin','Sophie Dumond'],
    intro:'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
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
    caractors:['Zain','Rahil','Sahar'],
    intro:'While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.',
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
    caractors:['Lance Blake','Lance Schofield','Sergeant Sanders'],
    intro:'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
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
    caractors: ['Ma','Jack','Old Nick'],
    intro: 'Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.',
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
    caractors:['Cobb','Ariande','Eames'],
    intro:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    views:171,
    rate : 3.3,
    year : 2010
  },

];
// Movies constructor
function Movies(id,name,category,duration,pathIds,mainImage,year,actors,caractors,intro){
  this.id = id;
  this.name = name;
  this.mainImage = `../img/covers/${mainImage}`;
  this.profileImage = `../img/${name.replace(/\s+/g, '-')}.jpg`;
  this.path = pathIds;
  this.category = category;
  this.duration = duration;
  this.actors = actors;
  this.year = year;
  this.caractors=caractors;
  this.intro = intro;
  this.actors = actors;
  this.rate = randomRate(5,1);
  this.views = randomViews(10000,1000);
  Movies.allMovie.push(this);
}
Movies.allMovie = [];

generateMovies();

// console.log(Movies.allMovie)

// creating a function that will generate movie objects & assign path & category
function generateMovies(){
  for(let i=0; i<allMovies.length; i++){
    new Movies(allMovies[i].id,allMovies[i].name,allMovies[i].categories,allMovies[i].Duration,allMovies[i].pathIds,allMovies[i].coverImg,allMovies[i].year,allMovies[i].actors,allMovies[i].caractors,allMovies[i].intro);
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
