'use strict';
let container = document.getElementById('watch-list');
let watchListLibary = JSON.parse('')// the key name in local storage 

// need  call the constructor bilud in the the all movie page  by add to list buttom by push the information in new array to see it here 
//
function Watchlist(name,date,rate,image,description,actors,trailerURL){
  this.name=name;
  this.date=date;
  this.rate=rate;
  this.image=image;
  this.description=description;
  this.actors=actors;
  this.trailerURL=trailerURL;
  Watchlist.all.push(this);
}
Watchlist.all=[];
Watchlist.prototype.render=function(){




};

