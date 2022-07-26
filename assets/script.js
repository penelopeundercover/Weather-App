var searchInputElement = document.getElementById("enterCity");
var searchButtonElement = document.getElementById("searchBtn");
var currentWeatherContainerElement = document.getElementById(
  "current-weather-container"
);

var WEATHER_API_KEY = "c7a5b1daca5f74e9896820a90d4e53e8";

//When user clicks the Search button, save user input
searchButtonElement.addEventListener("click", function () {
  console.log(searchInputElement.value);
});

//Get weather info from the openweather app
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=portland&appid=${WEATHER_API_KEY}`
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// function getCoordinates(city) {
//   var coordinates = {
//     long: "",
//     lat: "",
//   };
//   fetch(
//     "http://api.openweathermap.org/geo/1.0/direct?appid=${WEATHER_API_KEY}q=${city}&limit=1"
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });

//   //Do something to get it
//   return coordinates;
// }

//Display the weather info we just fetched

function handleSearch(event) {
  event.preventDefault();
}
