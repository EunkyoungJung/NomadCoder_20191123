const weather = document.querySelector(".js-weather");

const API_KEY = "bc7625bf85f8a7e25671ae3fa6d42b42";
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units`).then(function(response){
        return response.json();
    }).then(function(json){
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    //console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo locastion");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords() {
    
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
        //console.log(parseCoords);

        //console.log("haha");
    }
}

function init(){
    loadCoords();
}

init();

