var searchInputElement = document.getElementById("enterCity");
var searchButtonElement = document.getElementById("searchBtn");
var currentWeatherContainerElement = document.getElementById(
  "current-weather-container"
);

var WEATHER_API_KEY = "c7a5b1daca5f74e9896820a90d4e53e8";

//When user clicks the Search button, save user input
searchButtonElement.addEventListener("click", function () {
  console.log(searchInputElement.value);

  //Get weather info from the openweather app
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchInputElement.value}&appid=${WEATHER_API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=${WEATHER_API_KEY}&units=imperial`
      )
        .then(function (response2) {
          return response2.json();
        })
        .then(function (data2) {
          console.log(data2);
          generateHTML(data2);
          data2.list[0].main.temp;
        });
    });
});

//Display the weather info we just fetched
function generateHTML(weatherData) {
  //Put current conditions here
  //Locate where you're going to create the card in your HTML
  var weatherDiv = document.querySelector(".weather-forecast");
  var currentWeatherDiv = document.querySelector(".current-weather");
  //Create a card
  var card = document.createElement(`div`);
  card.setAttribute("class", "card col");
  //Add a p tag in the card with the temperature info
  var temp = document.createElement(`p`);
  temp.setAttribute("class", "card-text");
  temp.textContent = `temp = ${weatherData.list[0].main.temp}`;
  //Add the p tag to the card
  card.append(temp);
  //Add the card to the HTML
  currentWeatherDiv.append(card);

  //Loop through the api result and create a new card each time through the loop.
  //We're only going to 5 because the array of info is super long.
  for (var x = 1; x < 6; x++) {
    //Create a card
    var card = document.createElement(`div`);
    card.setAttribute("class", "card col");
    //Add a p tag in the card with the temperature info
    var temp = document.createElement(`p`);
    temp.setAttribute("class", "card-text");
    temp.textContent = `temp = ${weatherData.list[x].main.temp}`;
    //Add the p tag to the card
    card.append(temp);
    //Add the card to the HTML
    weatherDiv.append(card);
  }
}

//Here's another way to create this function:
//const generateHTML = (weatherData) => {}
//This way would allow you to use async/await, like if you had a function where you were calling an api, or if you had a button click.

//Local storage--see project 1
//getItem then json.parse (ex: var storedTodos = JSON.parse(localStorage.getItem("todos"));
//stringify then setItem (ex: localStorage.setItem("todos", JSON.stringify(todos));
//a button would be easier than an <a>

function handleSearch(event) {
  event.preventDefault();
}
