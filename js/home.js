'use strict'
window.addEventListener('scroll',()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})


let coverImg = [
{
    name : 'The Batman',
    categories :'Action Crime Drama | Duration: 2h20m',
    img : 'Batman.jpg'
},
{
    name : 'Dracula Untold',
    categories :'Action Drama Fantasy | Duration: 1h32m',
    img : 'Dracula.jpg'
},
{
    name : 'The-Jungle-Book',
    categories :'Adventure Drama Family | Duration: 1h40m',
    img : 'The-Jungle-Book.jpg'
},

];



let image = document.getElementById('cover');
let movieName = document.getElementById('movieName')
let categories = document.getElementById('categories')


let index = -1

window.addEventListener('load',()=>{


    
    setInterval(() => {
        index +=1;
        if(index < coverImg.length){
            image.setAttribute('src',`img/covers/${coverImg[index].img}`)
            image.setAttribute('class',`fade-in`)
            movieName.textContent = coverImg[index].name;
            categories.textContent = coverImg[index].categories;
        }else{
            index = -1
            image.setAttribute('src',`img/covers/wrath-Of-The-Titans.jpg`)
            movieName.textContent = 'Wrath OF THE TITANS';
            categories.textContent = 'Fantasy Family Drama | Duration: 1h50m ';
        }
    }, 5000);



})


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
    
});



// console.log(55)