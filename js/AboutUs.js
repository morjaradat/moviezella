'use strict';

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky2', window.scrollY > 730);
});

let coverImg = [
  {
    name: 'Our Vision',
    categories: 'THE MOVIEZELLA are working to be the best movies website for Jordanian watchers.',
    img: 'MoviesZella.png'
  },
  {
    name: 'Our Mission',
    categories: `With a professional team, THE MOVIEZELLA are working to make the best movies available for
    Jordanian watchers.`,
    img: 'MoviesZella.png'
  },
  {
    name: 'Who we are ?',
    categories: 'we are a group of noobies trying to dig our future into the world of web development.',
    img: 'MoviesZella.png'
  },
  {
    name: 'what we do ?',
    categories: 'we code our dreams and ambitions to make the best sites we can.',
    img: 'MoviesZella.png'
  },


];



let image = document.getElementById('cover');
let movieName = document.getElementById('movieName');
let categories = document.getElementById('categories');


let index = -1;

window.addEventListener('load', () => {

  image.setAttribute('src', `../img/ameenImg/MoviesZella.png`);
  // movieName.textContent = `About Us`;
  // // categories.textContent = `At Moviezella, we want to entertain the world. Whatever your taste, and no matter where you live,
  // // we give you access to best-in-class movies. Our members control what they want to watch, when they want it, with
  // // no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries because great
  // // stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and
  // // we’re always looking to help you find your next favorite story`;

  setInterval(() => {
    index += 1;
    if (index < coverImg.length) {
      image.setAttribute('src', `../img/ameenImg/MoviesZella.png`);
      image.setAttribute('class', `fade-in`);
      movieName.textContent = coverImg[index].name;
      categories.textContent = coverImg[index].categories;
    } else {
      index = -1;
      image.setAttribute('src', `../img/ameenImg/MoviesZella.png`);
      movieName.textContent = 'Our Vision';
      categories.textContent = `With a professional team, THE MOVIEZELLA are working to make the best movies available for
      Jordanian watchers.`;
    }
  }, 8000);

});


// const ratingbox = document.getElementById('rating');
// const items = document.querySelectorAll('.rating-Item');



// ratingbox.addEventListener('click', (e) => {
//   const elClass = e.target.classList;
//   if (!elClass.contains('active')) {
//     items.forEach(item => {
//       item.classList.remove('active');
//     });
//     elClass.add('active');
//   }

// });





// console.log(55);
