const container = document.querySelector('.container');
const search = document.querySelector(' .search-box button');
const weatherBox = document.querySelector(' .weather-box');
const weatherDetails = document.querySelector(' .weather-details');
const error404 = document.querySelector(' .not-found');

search.addEventListener('click', () => {

    const APIkey = '1f7babe07113ed166ad32921ddcab16b'
    const city = document.querySelector('.search-box input').ariaValueMax;


    if (city === '')
        return;

    fetch('`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => {
        if ()
    })

})