let id = localStorage.getItem('profileId');

// document.write(id);

let profile = [];

for(let i = 0 ; i < Movies.allMovie.length ; i++){
  if(Movies.allMovie[i].id == id){
    profile.push(Movies.allMovie[i]);
  }
}
// console.log(profile);




let container = document.getElementById('container');
console.log(profile[0]);

let cata = profile[0].category.split(' ');


// console.log(cata);
let html = `<div class="container">

<a href="#"><img src="${profile[0].profileImage}" height="350px" alt="cover" class="cover" /></a>

<div class="hero" id="hero2">

    <div class="details">

        <div class="title1">${profile[0].name}</div>

        

        <fieldset class="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5"
                title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half"
                for="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" checked /><label class="full" for="star4"
                title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half"
                for="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3"
                title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half"
                for="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2"
                title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half"
                for="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1"
                title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half"
                for="starhalf" title="Sucks big time - 0.5 stars"></label>
        </fieldset>



    </div>

</div>

<div class="description">

    <div class="column1">
        <span class="tag">${cata[0]}</span>
        <span class="tag">${cata[1]}</span>
        <span class="tag">${cata[2]}</span>
    </div>

    <div class="column2">

        <p>${profile[0].intro}
        </p>
        <p><span class="bold">Director:</span> <a href="#">Colin Trevorrow </a></p>
        <p><span class="bold">Writers:</span><a href="#">Rick Jaffa, Amanda Silver</a> </p>
        <button id="watchlist">+ Add to Watchlist</button>
        <div class="article" id="titlecast">
            <table class="cast_list">
                <tbody>
                    <tr>
                        <td colspan="4" class="castlist_label">Cast overview, first billed only</td>
                    </tr>
                    <tr class="odd">
                        <td class="primary_photo"><a href="#"><img height="44" width="32"
                                    src="../img/movieprofile/harfy.jpg" class="loadlate"></a> </td>

                        <td>${profile[0].actors[0]} </td>

                        <td class="character">
                            ${profile[0].caractors[0]}
                        </td>
                    </tr>

                    <tr class="even">
                        <td class="primary_photo"><a href="#"><img height="44" width="32"
                                    src="../img/movieprofile/page.jpg" class="loadlate"></a> </td>

                        <td>${profile[0].actors[1]} </td>

                        <td class="character">
                            ${profile[0].caractors[1]}
                        </td>
                    </tr>

                    <tr class="odd">
                        <td class="primary_photo"><a href="#"><img height="44" width="32"
                                    src="../img/movieprofile/murphy.jpg" class="loadlate"></a> </td>

                        <td>${profile[0].actors[2]}</td>

                        <td class="character">
                            ${profile[0].caractors[2]}
                        </td>
                    </tr>
                </tbody>

            </table>
          
        </div>
    </div>


</div>
</div>`;


container.innerHTML = html;

document.getElementById("hero2").style.background =`url(${profile[0].mainImage})`;


const watchSection=document.getElementById('watchlist');
watchSection.addEventListener('click',add);
function add(){
  
    if(!watchListArray.includes(profile[0])){
                console.log(watchListArray);

        watchListArray.push(profile[0]);
        console.log(watchListArray);
        let localArray = JSON.stringify(watchListArray);
        localStorage.setItem('watchlist',localArray)
        // let movies = JSON.parse(localStorage.getItem("watchlist") || "[]");

        // console.log(movies)
    }
//   console.log(watchListArray)
}

// localStorage.setItem('watchList', JSON.stringify(this.items))