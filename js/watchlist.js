'use strict';
// let container = document.getElementById('watch-list');
// let watchListLibary = JSON.parse('')      // the key name in local storage

// need  call the constructor bilud in the the all movie page  by add to list buttom by push the information in new array to see it here

//image,description,URL

function Watchlist(name,rate,categories,image){
  this.name=name;
  this.rate=rate;
  this.categories=categories;
  this.image=image;
  // this.description=description;
  // this.actors=actors;
  // this.URL=URL;
  Watchlist.all.push(this);
}
Watchlist.all=[];
console.log(Watchlist.all);
{/* <ul id="watch-list">
     <li> <div class="list-section" >
<img src="https://placehold.it/200x300/ddd" alt="">
<div class="info">
<h2>name</h2>
<p>rate</p>
<p>categories</p>
</div>
<button class="remove"> remove</button>
<button class="moreInfo"> More Info</button>
</div>
</li>
  </ul> */}

Watchlist.prototype.render=function(){
  for (let i = 0; i <Watchlist.all.length; i++) {
    let container = document.getElementById('watch-list');
    let liEle =document.createElement('li');
    container.appendChild(liEle);

    let divEle1= document.createElement('div');
    divEle1.className='list-section';
    liEle.appendChild(divEle1);


    let movieImg= document.createElement('img');
    divEle1.appendChild(movieImg);
    movieImg.src=`${this.image}`; ////////////------

    let divEle2=document.createElement('div');
    divEle2.className='info';
    divEle1.appendChild(divEle2);

    let h2Ele=document.createElement('h2');
    divEle2.appendChild(h2Ele);
    h2Ele.textContent=`${this.name}`;

    let paraEle1=document.createElement('p');
    divEle2.appendChild(paraEle1);
    paraEle1.textContent=`${this.rate}`;

    let paraEle2=document.createElement('p');
    divEle2.appendChild(paraEle2);
    paraEle2.textContent=`${this.categories}`;

    let removeButtom=document.createElement('button');
    removeButtom.className='remove';
    divEle1.appendChild(removeButtom);
    removeButtom.textContent='X';
    removeButtom.addEventListener('click',removeItem );
    function removeItem(event){
      Watchlist.all.pop();
      
    }

    let infoButtom=document.createElement('button');
    infoButtom.className='moreInfo';
    divEle1.appendChild(infoButtom);
    infoButtom.textContent='VIEW INFO';
  }

};
const newMoive = new Watchlist('movie',8.1,'action','https://placehold.it/200x300/ddd');
newMoive.render();

const test =new Watchlist('fly',7,'Adventure','../img/53851c3548edb28c90ba71841b0e58b2a910b5cc.png');
test.render();


