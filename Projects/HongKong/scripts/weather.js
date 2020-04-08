function weatherRequest() {

    var url = 'https://api.openweathermap.org/data/2.5/weather?q=hongkong&units=metric&appid=ef456bc97aa4105afb0b8c7921eb7ea5';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {

        var weather = JSON.parse(this.response);

        console.log(weather);

        document.getElementById("mainWeather").innerHTML = weather.weather[0].main;

        document.getElementById("degrees").innerHTML = weather.main.temp + " degrees";

        document.getElementById("description").innerHTML = weather.weather[0].description;


        //       WEATHER ICON SWTICH STATEMENTS     //

        var img = weather.weather[0].icon;
        switch (img) {
            case "01d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/01d.png" height=300px width=auto>';
                break;

            case "01n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/01n.png" height=300px width=auto>';
                break;

            case "02d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/02d.png" height=300px width=auto>';
                break;

            case "02n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/02n.png" height=300px width=auto>';
                break;

            case "03d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/03d.png" height=300px width=auto>';
                break;

            case "03n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/03n.png" height=300px width=auto>';
                break;

            case "04d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/04d.png" height=300px width=auto>';
                break;

            case "04n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/04n.png" height=300px width=auto>';
                break;

            case "09d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/09d.png" height=300px width=auto>';
                break;

            case "09n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/09n.png" height=300px width=auto>';
                break;

            case "10d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/10d.png" height=300px width=auto>';
                break;

            case "10n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/10n.png" height=300px width=auto>';
                break;

            case "11d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/11d.png" height=300px width=auto>';
                break;

            case "11n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/11n.png" height=300px width=auto>';
                break;

            case "13d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/13d.png" height=300px width=auto>';
                break;

            case "13n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/13n.png" height=300px width=auto>';
                break;

            case "50d":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/50d.png" height=300px width=auto>';
                break;

            case "50n":
                document.getElementById("weatherpng").innerHTML = '<img src="images/weatherIcons/50n.png" height=300px width=auto>';
                break;
        }
    }
    xhr.send();
}
