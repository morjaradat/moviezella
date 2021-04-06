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




window.addEventListener('load', () => {

    

    setInterval(() => {
        index += 1;
        if (index < 3) {
            image.setAttribute('src', `${Movies.allMovie[index].mainImage}`)
            image.setAttribute('class', `fade-in`)
            movieName.textContent = Movies.allMovie[index].name;
            categories.textContent = `${Movies.allMovie[index].category} | Duration: ${Movies.allMovie[index].duration}`;
        } else {
            index = -1
            image.setAttribute('src', `img/covers/WrathOfTheTitans.jpg`)
            movieName.textContent = 'Wrath OF THE TITANS';
            categories.textContent = 'Fantasy Family Drama | Duration: 1h50m ';
        }
    }, 5000);

});


let trendBtn = document.getElementById('trend');
let rate = document.getElementById('rate');

rate.addEventListener('click',()=>{
    document.getElementById("trendcardsContainer").style.display = "none";
    document.getElementById("ratingcardsContainer").style.display = "flex";
})

trendBtn.addEventListener('click',()=>{
    document.getElementById("trendcardsContainer").style.display = "flex";
    document.getElementById("ratingcardsContainer").style.display = "none";
})









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


for (let i = 0; i < 4; i++) {



    let html = `
                    <div class="card movie_card">
                        <img src="${trinding[i].profileImage}" class="card-img-top" alt="...">
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
for (let i = 0; i < 4; i++) {



    let html = `<div class="card movie_card">
                    <img src="${rating[i].profileImage}" class="card-img-top" alt="...">
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

// let id_profile = document.querySelectorAll('.fa-play');

// for(let i = 0 ; i < id_profile.length;i++){
//     id_profile[i].addEventListener('click',storege);
// }

// function storege(e){
//     let id = e.target.id;

//     localStorage.setItem('profileId',id);

//     window.location = '../pages/movieProfile.html'
// }

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








//////////
