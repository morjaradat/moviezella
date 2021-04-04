'use strict'

const ratingbox = document.getElementById('rating');
const items = document.querySelectorAll('.rating-Item');



ratingbox.addEventListener('click',(e)=>{
    const elClass = e.target.classList;
    if(!elClass.contains('active')){
        items.forEach(item =>{
            item.classList.remove('active')
        });
        elClass.add('active');
    }
    console.log(e.target.classList);
});

// console.log(55)