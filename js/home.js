let movieslist = JSON.parse(localStorage.getItem('watchlist'));
if(movieslist){
  movieslist = JSON.parse(localStorage.getItem('watchlist'))
}else{
  movieslist=[];
}

// console.log(movieslist)

'use strict'
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky2', window.scrollY > 500);
})




let index = -1

let image = document.getElementById('cover');
let movieName = document.getElementById('movieName')
let categories = document.getElementById('categories')

let watchtraler = document.querySelector('.btn1');
let veiwInfo = document.querySelector('.btn2');

let addwatchList = document.querySelector('.addWatch')









window.addEventListener('load', () => {

    

  setInterval(() => {

    index++;
    if (index < 3) {
      
      image.setAttribute('src', `${Movies.allMovie[index].mainImage}`)
      watchtraler.setAttribute('id', `${Movies.allMovie[index].id}`);
      addwatchList.setAttribute('id',`${Movies.allMovie[index].id}`)
      veiwInfo.setAttribute('id',`${Movies.allMovie[index].id}`)
      movieName.textContent = Movies.allMovie[index].name;
      categories.textContent = `${Movies.allMovie[index].category} | Duration: ${Movies.allMovie[index].duration}`;
    } else {
      index = -1
      image.setAttribute('src', `img/covers/WrathOfTheTitans.jpg`)
      movieName.textContent = 'Wrath OF THE TITANS';
      categories.textContent = 'Fantasy Family Drama | Duration: 1h50m ';
      watchtraler.id = '16'
      veiwInfo.id = '16'
      watchtraler.addEventListener('click',openTrailer)
    }


    
  }, 5000);


  
});

setInterval(() => {
  removeEvent()
  console.log('removed')
}, 20000);

let trailerBox = document.querySelector('.trailer');
let iFrame = document.querySelector('iframe');
let htmlPath;
function openTrailer(e){
  let id = parseInt(e.target.id) ;

  console.log(id)


    htmlPath = `https://www.youtube.com/embed/${Movies.allMovie[e.target.id-1].path}`
    iFrame.src = htmlPath
  

  trailerBox.style.display = 'block'

}

function removeEvent(){
  watchtraler.removeEventListener('click',openTrailer);

}

veiwInfo.addEventListener('click',storege);

watchtraler.addEventListener('click',openTrailer)



let trendBtn = document.getElementById('trend');
let rate = document.getElementById('rate');


window.addEventListener('load', () => {
  trendBtn.style.color = '#e75480'
})


rate.addEventListener('click',()=>{
  rate.style.color = '#e75480'
  trendBtn.style.color = 'black'
  document.getElementById("trendcardsContainer").style.display = "none";
  document.getElementById("ratingcardsContainer").style.display = "flex";
})

trendBtn.addEventListener('click',()=>{
  trendBtn.style.color = '#e75480'
  rate.style.color = 'black'

  document.getElementById("trendcardsContainer").style.display = "flex";
  document.getElementById("ratingcardsContainer").style.display = "none";
})





// console.log(Movies.all[1]);


const trendcardsContainer = document.getElementById('trendcardsContainer');
const ratingcardsContainer = document.getElementById('ratingcardsContainer');

let trinding = [...Movies.allMovie]

function compare(a, b) {
  if (a.views < b.views) {
    return 1;
  }
  if (a.views > b.views) {
    return -1;
  }
  return 0;
}

trinding.sort(compare);

let newarrayTrend;

for (let i = 0; i < 4; i++) {

  newarrayTrend = trinding[i].profileImage.split('/')

  newarrayTrend.shift()


  let html = `
                    <div class="card movie_card">
                        <img src="${newarrayTrend.join('/')}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <i class="fas fa-play play_button" id="${trinding[i].id}" data-toggle="tooltip" data-placement="bottom" title="profile">
                        </i>
                        <h5 class="card-title">${trinding[i].name}</h5>
                            <span class="movie_info">${trinding[i].year}</span>
                            <span class="movie_info float-right"><i class="fas fa-star"></i> ${trinding[i].rate} / 5</span>
                        </div>
                    </div>
                `

  trendcardsContainer.innerHTML += html

}




let rating = [...Movies.allMovie]

function comparerate(a, b) {
  if (a.rate < b.rate) {
    return 1;
  }
  if (a.rate > b.rate) {
    return -1;
  }
  return 0;
}

rating.sort(comparerate)

let newarrayRating;
for (let i = 0; i < 4; i++) {



  newarrayRating = rating[i].profileImage.split('/');

  newarrayRating.shift();

  let html = `<div class="card movie_card">
                    <img src="${newarrayRating.join('/')}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <i class="fas fa-play play_button" id="${rating[i].id}" data-toggle="tooltip" data-placement="bottom" title="profile"></i>
                    <h5 class="card-title">${rating[i].name}</h5>
                        <span class="movie_info">${rating[i].year}</span>
                        <span class="movie_info float-right"><i class="fas fa-star"></i> ${rating[i].rate} / 5</span>
                    </div>
                </div>`

  ratingcardsContainer.innerHTML += html

}















const ratingbox = document.getElementById('rating');
const items = document.querySelectorAll('.rating-Item');



ratingbox.addEventListener('click', (e) => {
  const elClass = e.target.classList;
  if (!elClass.contains('active')) {
    items.forEach(item => {
      item.classList.remove('active')
    });
    elClass.add('active');
  }
  console.log(e.target.classList);
});



//////////////////////////////////////////////

// passing the movie profile Id 

let id_profile = document.querySelectorAll('.fa-play');

for(let i = 0 ; i < id_profile.length;i++){
    id_profile[i].addEventListener('click',storege);
}

function storege(e){
    let id = e.target.id;

    console.log(id)
    
    localStorage.setItem('profileId',id);

    window.location = './pages/movieProfile.html'

}

// passing the movie profile Id 

///////////////////////////////////////////////


////////////

// let id = localStorage.getItem('profileId');

// document.write(id)

// let profile = []

// for(let i = 0 ; i < Movies.allMovie.length ; i++){
//     if(Movies.allMovie[i].id == id){
//         profile.push(Movies.allMovie[i])
//     }
// }
// console.log(profile)



// console.log(Movies.allMovie[1]);


addwatchList.addEventListener('click',(e)=>{
  // console.log(e.target.id);

  console.log(Movies.allMovie[e.target.id-1])

  movieslist.push(Movies.allMovie[e.target.id-1])
  
  localStorage.setItem('watchlist',JSON.stringify(movieslist))

});






//////////

