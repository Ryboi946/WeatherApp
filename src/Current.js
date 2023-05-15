
const divItem = document.getElementById('enter');
divItem.addEventListener('click', CurrentWeather);

let API_Key = 'fcdad555357675fa31f08e394ede826d';
let country_code = 'US';


function CurrentWeather() {
    
    let zipcode = document.getElementById('enter').value;
    let URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
    let GeoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country_code}&appid=${API_Key}`;
    GetCoordinates(GeoURL, zipcode);
    
}



async function GetCoordinates(GeoURL) {
    const response = await fetch(GeoURL);
    const data = await response.json();
    lat = data.lat;
    lon = data.lon;
    console.log(lat);
    console.log(lon);
    WeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;
    
    GetWeather(WeatherURL);
  }

  async function GetWeather(WeatherURL) {
    const response = await fetch(WeatherURL);
    const data = response.json();

  }