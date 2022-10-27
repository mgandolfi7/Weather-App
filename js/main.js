//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#getWeather').addEventListener('click', getWeather)

let zipCode = 0;

function getWeather() {
    zipCode = document.querySelector('input').value
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=81dd34e624274aca8bc200448221410&q=${zipCode}&days=7`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#location').innerText = data.location.name
        document.querySelector('#weatherText').innerText = "Condition: " + data.current.condition.text
        document.querySelector('#icon').src = data.current.condition.icon
        document.querySelector('#currentTemp').innerText = data.current.temp_f + "F"
        document.querySelector('#wind').innerText = "Wind: " + data.current.wind_mph + "mph " + data.current.wind_dir
        document.querySelector('#feelsLike').innerText = "Feels Like: " + data.current.feelslike_f + "F"
        document.querySelector('#humidity').innerText = "Humidity: " + data.current.humidity + "%"
        document.querySelector('#uvIndex').innerText = "UV Index: " + data.current.uv

        document.querySelector('#date1').innerText = data.forecast.forecastday[1].date
        document.querySelector('#maxTemp1').innerText = "Max Temp: " + data.forecast.forecastday[1].day.maxtemp_f
        document.querySelector('#minTemp1').innerText = "Min Temp: " + data.forecast.forecastday[1].day.mintemp_f
        document.querySelector('#chanceOfRain1').innerText = "Chance of Rain: " + data.forecast.forecastday[1].day.daily_chance_of_rain + "%"

        document.querySelector('#date2').innerText = data.forecast.forecastday[2].date
        document.querySelector('#maxTemp2').innerText = "Max Temp: " + data.forecast.forecastday[2].day.maxtemp_f
        document.querySelector('#minTemp2').innerText = "Min Temp: " + data.forecast.forecastday[2].day.mintemp_f
        document.querySelector('#chanceOfRain2').innerText = "Chance of Rain: " + data.forecast.forecastday[2].day.daily_chance_of_rain + "%"

        document.querySelector('#date3').innerText = data.forecast.forecastday[3].date
        document.querySelector('#maxTemp3').innerText = "Max Temp: " + data.forecast.forecastday[3].day.maxtemp_f
        document.querySelector('#minTemp3').innerText = "Min Temp: " + data.forecast.forecastday[3].day.mintemp_f
        document.querySelector('#chanceOfRain3').innerText = "Chance of Rain: " + data.forecast.forecastday[3].day.daily_chance_of_rain + "%"

        document.querySelector('#date4').innerText = data.forecast.forecastday[4].date
        document.querySelector('#maxTemp4').innerText = "Max Temp: " + data.forecast.forecastday[4].day.maxtemp_f
        document.querySelector('#minTemp4').innerText = "Min Temp: " + data.forecast.forecastday[4].day.mintemp_f
        document.querySelector('#chanceOfRain4').innerText = "Chance of Rain: " + data.forecast.forecastday[4].day.daily_chance_of_rain + "%"

        document.querySelector('#date5').innerText = data.forecast.forecastday[5].date
        document.querySelector('#maxTemp5').innerText = "Max Temp: " + data.forecast.forecastday[5].day.maxtemp_f
        document.querySelector('#minTemp5').innerText = "Min Temp: " + data.forecast.forecastday[5].day.mintemp_f
        document.querySelector('#chanceOfRain5').innerText = "Chance of Rain: " + data.forecast.forecastday[5].day.daily_chance_of_rain + "%"

        document.querySelector('#date6').innerText = data.forecast.forecastday[6].date
        document.querySelector('#maxTemp6').innerText = "Max Temp: " + data.forecast.forecastday[6].day.maxtemp_f
        document.querySelector('#minTemp6').innerText = "Min Temp: " + data.forecast.forecastday[6].day.mintemp_f
        document.querySelector('#chanceOfRain6').innerText = "Chance of Rain: " + data.forecast.forecastday[6].day.daily_chance_of_rain + "%"


    })


    

    .catch(err => {
        console.log(`error ${err}`)
    });




}


