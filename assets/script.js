var searchInputElement = document.getElementById("searchCityInput");
var searchButtonElement = document.getElementById("submit-search-button");
var currentWeatherContainerElement = document.getElementById(
  "current-weather-container"
);

var WEATHER_API_KEY = "c7a5b1daca5f74e9896820a90d4e53e8";

function getCoordinates(city) {
  var coordinates = {
    long: "",
    lat: "",
  };
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?appid=${WEATHER_API_KEY}q=${city}&limit=1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  //Do something to get it
  return coordinates;
}

function handleSearch(event) {
  event.preventDefault();
}
