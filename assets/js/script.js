let searchCity = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator--humidity>.value');
let wind = document.querySelector('.weather_indicator--wind>.value');
let temperature = document.querySelector('.weather_temperature>.value');

let weatherAPIKey ='a348b9b62df45ce36954774aad4a680a'; // API key generated from https://openweathermap.org/
let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey; // Adding the API key to the URL

//to verify the given url is working, creating a function called getWeatherbyCity
let getWeatherbyCity = async (city) =>{
   let endpoint = weatherURL + "&q=" + city;
    let response = await fetch(endpoint); //to request the endpoint the fetch function is called.
    let weather = await response.json();
    return weather;

}

// add event listener

let updateCurrentWeather = (data)=>{
    city.textContent = data.name + ','+ data.sys.country;
    day.textContent = dayofWeek();
}
let dayofWeek =() => {
    return new Date().toLocaleDateString('en-EN', {'weekday': 'long'})
}
