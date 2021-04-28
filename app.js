const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = '5d484bbdfa443be9fcf444bfc2688cfa';

enterCity = document.querySelector('.enterCity');
enterCity.addEventListener('keydown',function(e){
    if(e.keyCode == '13'){
        getWeather(enterCity.value) ;
    }
})

const getWeather = (city) => {
    let link = `${url}${city}&appid=${key}&units=metric&lang=tr`;
    fetch(link)
        .then(weather =>{
            return weather.json();
        })
        .then(showWeather);
}

const showWeather = (result) => {
    let city = document.querySelector('#city');
    city.innerText = `${result.name}`;

    let weather = document.querySelector('.weather');
    weather.innerText = `${result.main.temp} C°`;

    let description = document.querySelector('.description');
    description.innerText =`${result.weather[0].description}`;
}