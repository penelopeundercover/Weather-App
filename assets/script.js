var WEATHER_API_KEY = "c7a5b1daca5f74e9896820a90d4e53e8";
var coordinates = {
    long: "",
    lat: ""
}
fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state
    code},{country code}&limit={limit}&appid=${WEATHER_API_KEY}");
    then(function(response)) { then return response.json();
    }).then(function(data) { console.log(data); });