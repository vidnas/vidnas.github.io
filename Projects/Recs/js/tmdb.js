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

        console.log(movieFirst.results[0]);

        document.getElementById("title").innerHTML = movieFirst.results[0].title;
        document.getElementById("release_date").innerHTML = movieFirst.results[0].release_date;
        document.getElementById("overview").innerHTML = movieFirst.results[0].overview;
        document.getElementById("trailer").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movieFirst.results[0].poster_path + '" width="320" height="auto" id="poster">';
        document.getElementById("background").src = "https://image.tmdb.org/t/p/original" + movieFirst.results[0].backdrop_path;
        movieSearchExtras(movieFirst);
    }
    xhr.send();
    //   callback();  
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


        document.getElementById("stars").innerHTML = movieFirstExtras.credits.cast[0].name + ", " 
            + movieFirstExtras.credits.cast[1].name + ", " 
            + movieFirstExtras.credits.cast[2].name + ", " 
            + movieFirstExtras.credits.cast[3].name;
        document.getElementById("genres").innerHTML = movieFirstExtras.genres[0].name + ", " 
            + movieFirstExtras.genres[1].name + ", " 
            + movieFirstExtras.genres[2].name;


    }

    xhr2.send();

}

document.getElementById("btn1").addEventListener("click", completeSearch);
