window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperaturelocationTimezone = document.querySelector('.location-timezone');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/';

        const API_KEY = 'b3d299b54eec353786e4bca514ffd945';

        const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;


        fetch(api)
        .then(response => {
        return response.json();
        })

        .then(data => {
        console.log(data);
        const {temp} = data.main;
        const {main} = data.weather;
        const {name} = data;

        // DOM Elements from API

        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = main;
        temperaturelocationTimezone.textContent = name;

                const api2 = `${proxy}https://api.openweathermap.org/data/2.5/weather?q={temperaturelocationTimeZone}&appid={API_KEY}`
        })

        });

        }
    
})
    

