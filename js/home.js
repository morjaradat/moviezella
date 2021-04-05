'use strict'
import data from '../js/data.js'
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
            image.setAttribute('src', `img/covers/${data[index].coverImg}`)
            image.setAttribute('class', `fade-in`)
            movieName.textContent = data[index].name;
            categories.textContent = `${data[index].categories} | Duration: ${data[index].Duration}`;
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
    document.getElementById("ratingcardsContainer").style.display = "block";
})

trendBtn.addEventListener('click',()=>{
    document.getElementById("trendcardsContainer").style.display = "block";
    document.getElementById("ratingcardsContainer").style.display = "none";
})









const trendcardsContainer = document.getElementById('trendcardsContainer');
const ratingcardsContainer = document.getElementById('ratingcardsContainer');

let trinding = [...data]

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

    let name = trinding[i].name.split(' ').join('-');


    let html = `<div class="card">
                    <img src="img/${name}.jpg" alt="">
                    <p>${trinding[i].name}</p>
                    <button id="${trinding[i].id}" >click</button>
                </div>`

                trendcardsContainer.innerHTML += html

}




let rating = [...data]

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

    let name = rating[i].name.split(' ').join('-');


    let html = `<div class="card">
                    <img src="img/${name}.jpg" alt="">
                    <p>${rating[i].name}</p>
                    <button id="${trinding[i].id}" >click</button>
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



// console.log(55)







