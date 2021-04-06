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

function Watchlist(name,date,actor,time,categories,description,mainImage,coverImage){
  this.name=name;
  this.date=date;
  this.actor=actor;
  this.time=time;
  this.categories=categories;
  this.description=description;
  this.mainImage=mainImage;
  this.coverImage=coverImage;
  // this.URL=URL;


  Watchlist.all.push(this);
}
Watchlist.all=[];
// console.log(Watchlist.all);
// {<div class="movie_card" id="bright">
//   <div class="info_section">
//     <div class="movie_header">
//       <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
//       <h1>Bright</h1>
//       <h4>2017, David Ayer</h4>
//       <span class="minutes">117 min</span>
//       <p class="type">Action, Crime, Fantasy</p>
//     </div>
//     <div class="movie_desc">
//       <p class="text">
//         Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
//       </p>
//     </div>
//     <div class="movie_social">
//       {/* <ul> --------buttons-----------
//         <li><i class="material-icons">share</i></li>
//         <li><i class="material-icons"></i></li>
//         <li><i class="material-icons">chat_bubble</i></li>
//       </ul> */}
//     </div>
//   </div>
//   <div class="blur_back bright_back"></div> ------?????-------
// </div>}*/

Watchlist.prototype.render=function(){

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
  movieImg.src=`${this.mainImage}`; /// ---- small movie image

  let h1Ele=document.createElement('h1');
  divEle3.appendChild(h1Ele);
  h1Ele.textContent=`${this.name}`; ///--------- movie name

  let h4Ele=document.createElement('h4');
  divEle3.appendChild(h4Ele);
  h4Ele.textContent=`${this.time} | ${this.actor} `; ///--------- date and main actor

  let spanEle = document.createElement('span');
  divEle3.appendChild(spanEle);
  spanEle.setAttribute('class','minutes');
  spanEle.textContent=`${this.time}`;///----------- time

  let paraEle1=document.createElement('p');
  divEle3.appendChild(paraEle1);
  paraEle1.setAttribute('class','type');
  paraEle1.textContent=`${this.categories}`; ///-------------categories


  let divEle4=document.createElement('div');
  divEle4.className='movie_desc';
  divEle2.appendChild(divEle4);

  let paraEle2=document.createElement('p'); ///-------------descreption
  divEle4.appendChild(paraEle2);
  paraEle2.setAttribute('class','text');
  paraEle2.textContent= `${this.description}`;

  let divEle5=document.createElement('div');
  divEle5.className='button_section';
  divEle2.appendChild(divEle5);

  let removeButtom=document.createElement('button');
  removeButtom.className='remove';
  divEle5.appendChild(removeButtom);
  removeButtom.textContent='Remove';

  removeButtom.addEventListener('click',remove); //----- remove function 
  function remove(){
    container.removeChild(liEle);
   
  }

  // let infoButtom=document.createElement('button');
  // infoButtom.className='moreInfo';
  // divEle5.appendChild(infoButtom);
  // infoButtom.textContent='VIEW INFO';
  // infoButtom.addEventListener('click',info);
  // function info(){
  //   container.removeChild(liEle);
  // }
  let divEle6=document.createElement('div');
  divEle6.className='blur_back bright_back';
  divEle1.appendChild(divEle6);
  document.getElementsByClassName('blur_back bright_back');
  divEle6.style.background=`url(${this.coverImage})`;
};

for (let i = 0; i < movieslist.length; i++) {

  const newMoive = new Watchlist(movieslist[i].name,movieslist[i].year,movieslist[i].actors[1],movieslist[i].duration,movieslist[i].category,movieslist[i].intro,movieslist[i].profileImage,movieslist[i].mainImage);
  newMoive.render();
  
}

