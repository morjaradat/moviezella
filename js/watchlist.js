'use strict';
// let container = document.getElementById('watch-list');

// let watchListLibary = localStorage.getItem(JSON.parse(''));
// the key name in local storage

let movieslist = JSON.parse(localStorage.getItem('watchlist'));

console.log(movieslist)
// need  call the constructor bilud in the the all movie page  by add to list buttom by push the information in new array to see it here

//image,description,URLz
window.addEventListener('scroll',()=>{
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 0);
});
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky2', window.scrollY > 485);
});


for (let i = 0; i < movieslist.length; i++) {

  let container = document.getElementById('watch-list');
  let liEle =document.createElement('li');
  container.appendChild(liEle);


  let divEle1= document.createElement('div');
  divEle1.className='movie_card';
  divEle1.id='bright';
  liEle.appendChild(divEle1);

  let divEle2=document.createElement('div');
  divEle2.className='info_section';
  divEle1.appendChild(divEle2);

  let divEle3=document.createElement('div');
  divEle3.className='movie_header';
  divEle2.appendChild(divEle3);

  let movieImg= document.createElement('img');
  divEle3.appendChild(movieImg);
  movieImg.setAttribute('class','locandina');
  movieImg.src=`${movieslist[i].profileImage}`; /// ---- small movie image

  let h1Ele=document.createElement('h1');
  divEle3.appendChild(h1Ele);
  h1Ele.textContent=`${movieslist[i].name}`; ///--------- movie name

  let h4Ele=document.createElement('h4');
  divEle3.appendChild(h4Ele);
  h4Ele.textContent=`${movieslist[i].year} | ${movieslist[i].actors[0]} `; ///--------- date and main actor

  let spanEle = document.createElement('span');
  divEle3.appendChild(spanEle);
  spanEle.setAttribute('class','minutes');
  spanEle.textContent=`${movieslist[i].duration}`;///----------- time

  let paraEle1=document.createElement('p');
  divEle3.appendChild(paraEle1);
  paraEle1.setAttribute('class','type');
  paraEle1.textContent=`${movieslist[i].category}`; ///-------------categories


  let divEle4=document.createElement('div');
  divEle4.className='movie_desc';
  divEle2.appendChild(divEle4);

  let paraEle2=document.createElement('p'); ///-------------descreption
  divEle4.appendChild(paraEle2);
  paraEle2.setAttribute('class','text');
  paraEle2.textContent= `${movieslist[i].intro}`;

  let divEle5=document.createElement('div');
  divEle5.className='button_section';
  divEle2.appendChild(divEle5);

  let removeButtom=document.createElement('button');
  removeButtom.className='remove';
  removeButtom.setAttribute('id',`${movieslist[i].id}`)
  divEle5.appendChild(removeButtom);
  removeButtom.textContent='Remove';

  removeButtom.addEventListener('click',remove); //----- remove function 
  function remove(){
    
    container.removeChild(liEle);


   
  }

  let divEle6=document.createElement('div');
  divEle6.className='blur_back bright_back';
  divEle1.appendChild(divEle6);
  document.getElementsByClassName('blur_back bright_back');
  divEle6.style.background=`url(${movieslist[i].mainImage})`;
  
}


let removeBtn = document.querySelectorAll('.remove');

for(let i = 0 ; i < removeBtn.length ; i++){


  removeBtn[i].addEventListener('click',removeLI);

}


function removeLI(e){

  let id = e.target.id



  for(let i = 0 ; i<movieslist.length ; i++){

    if(movieslist[i].id==id){

      movieslist.splice(i, 1);


      localStorage.setItem('watchlist',JSON.stringify(movieslist))

      
    }
  }


  // console.log(id)

  // localStorage.removeItem('image');
}







