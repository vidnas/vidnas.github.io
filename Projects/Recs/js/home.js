/// POPULAR MOVIE BACKGROUND ///

function popularBackground() {

//    var userMovie = document.getElementById("userInput").value;
    var url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=898c53e4648c8d01605385c636421936'

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {

        var popularMovie = JSON.parse(this.response);

                console.log(popularMovie.results[0]);
     

        
        document.getElementById("popularPoster0").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[0].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster1").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[1].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster2").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[2].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster3").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[3].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster4").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[4].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster5").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[5].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster6").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[6].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster7").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[7].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster8").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[8].poster_path + '" class="popbackimages">';
        
        document.getElementById("popularPoster9").innerHTML = '<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popularMovie.results[9].poster_path + '" class="popbackimages">';
        
          
        

        // CALLING OTHER API REQUESTS //
        
//        movieSearchExtras(movieFirst);
        
    }
    xhr.send();
}


