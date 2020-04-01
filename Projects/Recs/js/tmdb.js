function completeSearch() {

    var movieFirst = movieSearch();

}




//FIRST API REQUEST//
function movieSearch() {

    var userMovie = document.getElementById("userInput").value;
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=898c53e4648c8d01605385c636421936&query=' + userMovie;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {

        var movieFirst = JSON.parse(this.response);

        document.getElementById("logo").innerHTML = '<h1 id="logotitle">' + movieFirst.results[0].title; + '</h1>';

        document.getElementById("release_date").innerHTML = movieFirst.results[0].release_date;
        document.getElementById("overview").innerHTML = movieFirst.results[0].overview;
        document.getElementById("posterMain").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirst.results[0].poster_path + '" id="poster">';
        document.getElementById("background").src = "https://image.tmdb.org/t/p/original" + movieFirst.results[0].backdrop_path;
        
        document.getElementById("rating").innerHTML= movieFirst.results[0].vote_average;

        // CALLING OTHER API REQUESTS //
        
        movieSearchExtras(movieFirst);
        movieSearchSimilar(movieFirst);
        movieReviews(movieFirst);
        movieIMDB(movieFirst);
        
    }
    xhr.send();
}

//SECOND API REQUEST//
function movieSearchExtras(movieFirst) {

    var tmdbID = movieFirst.results[0].id;
    var extras = 'https://api.themoviedb.org/3/movie/' + tmdbID + '?api_key=898c53e4648c8d01605385c636421936&language=en-US&append_to_response=credits%2Cstars';
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', extras, true);

    xhr2.onload = function () {

        var movieFirstExtras = JSON.parse(this.response);

        for (var i = 0; i < movieFirstExtras.credits.crew.length; i++) {
            if (movieFirstExtras.credits.crew[i].job == "Director" && movieFirstExtras.credits.crew[i].department == "Directing") {
                document.getElementById("director").innerHTML = movieFirstExtras.credits.crew[i].name;
            } else {

            }
        }


        document.getElementById("stars").innerHTML = movieFirstExtras.credits.cast[0].name + ", " +
            movieFirstExtras.credits.cast[1].name + ", " +
            movieFirstExtras.credits.cast[2].name + ", " +
            movieFirstExtras.credits.cast[3].name;
        document.getElementById("genres").innerHTML = movieFirstExtras.genres[0].name + ", " +
            movieFirstExtras.genres[1].name + ", " +
            movieFirstExtras.genres[2].name;


    }

    xhr2.send();

}

//---- THIRD API REQUEST - SIMILAR MOVIES ----//

function movieSearchSimilar(movieFirst) {

    var tmdbID = movieFirst.results[0].id;
    var similar = 'https://api.themoviedb.org/3/movie/' + tmdbID + '/recommendations?api_key=898c53e4648c8d01605385c636421936&language=en-US&page=1';
    var xhr3 = new XMLHttpRequest();
    xhr3.open('GET', similar, true);



    xhr3.onload = function () {

        var movieFirstSimilar = JSON.parse(this.response);



        //SIMILAR 1 //
        document.getElementById("similarPoster1").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirstSimilar.results[0].poster_path + '" width="300" height="auto" id="smallposter">';

//        document.getElementById("title1").innerHTML = movieFirstSimilar.results[0].title;

        //SIMILAR 2 //
        document.getElementById("similarPoster2").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirstSimilar.results[1].poster_path + '" width="300" height="auto" id="smallposter">';


        //SIMILAR 3 //
        document.getElementById("similarPoster3").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirstSimilar.results[2].poster_path + '" width="300" height="auto" id="smallposter">';


        //SIMILAR 4 //
        document.getElementById("similarPoster4").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirstSimilar.results[3].poster_path + '" width="300" height="auto" id="smallposter">';


    }

    xhr3.send();

}


var similarMovie = movieSearchSimilar();


//---- FOURTH API REQUEST - REVIEWS ----//

function movieReviews(movieFirst) {

    var tmdbID = movieFirst.results[0].id;
    var reviews = 'https://api.themoviedb.org/3/movie/' + tmdbID + '/reviews?api_key=898c53e4648c8d01605385c636421936&language=en-US&page=1';
    var xhr4 = new XMLHttpRequest();
    xhr4.open('GET', reviews, true);



    xhr4.onload = function () {

        var movieFirstReviews = JSON.parse(this.response);

        // REVIEW 1 //
      
        document.getElementById("review1").innerHTML = '<p>' + movieFirstReviews.results[0].content + '</p>';

    }

    xhr4.send();

}

//---- FIFTH API REQUEST - IMDB LINK ----//

function movieIMDB(movieFirst) {

    var tmdbID = movieFirst.results[0].id;
    var imdb = 'https://api.themoviedb.org/3/movie/' + tmdbID + '/external_ids?api_key=898c53e4648c8d01605385c636421936&language=en-US&page=1';
    var xhr5 = new XMLHttpRequest();
    xhr5.open('GET', imdb, true);



    xhr5.onload = function () {

        var movieIMDB = JSON.parse(this.response);

        // REVIEW 1 //
      
        document.getElementById("imdb").innerHTML = '<a href="https://www.imdb.com/title/' + movieIMDB.imdb_id + '/">IMDB</a>'

    }

    xhr5.send();

}

// ----- SIXTH recommendations links ----- //

function recSearch(recNum) {
    
    
    var recUserInput = similarMovie.results[recNum].title;
    
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=898c53e4648c8d01605385c636421936&query=' + recUserInput;

    var xhr6 = new XMLHttpRequest();

    xhr6.open('GET', url, true);

    xhr6.onload = function () {

        var movieFirst = JSON.parse(this.response);

        
        console.log(recUserInput);   
        

        document.getElementById("logo").innerHTML = '<h1 id="logotitle">' + movieFirst.results[0].title; + '</h1>';

        document.getElementById("release_date").innerHTML = movieFirst.results[0].release_date;
        document.getElementById("overview").innerHTML = movieFirst.results[0].overview;
        document.getElementById("posterMain").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirst.results[0].poster_path + '" id="poster">';
        document.getElementById("background").src = "https://image.tmdb.org/t/p/original" + movieFirst.results[0].backdrop_path;
        
        document.getElementById("rating").innerHTML= movieFirst.results[0].vote_average;

        // CALLING OTHER API REQUESTS //
        
        movieSearchExtras(movieFirst);
        movieSearchSimilar(movieFirst);
        movieReviews(movieFirst);
        movieIMDB(movieFirst);
        
    }
    xhr6.send();
}



//----- BUTTON PRESS AND ENTER KEY -----//

document.getElementById("btn1").addEventListener("click", completeSearch);
document.getElementById("btn1").addEventListener("click", searchScroll);


var userInput = document.getElementById("userInput");
userInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        completeSearch(e); 
        searchScroll(e);
    }
});

function searchScroll(){
var movieInfo = document.getElementById("logotitle");
movieInfo.scrollIntoView();
}


