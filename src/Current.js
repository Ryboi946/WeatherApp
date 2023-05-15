
const divItem = document.getElementById('enter');
divItem.addEventListener('click', CurrentWeather);

let API_Key = '';
let country_code = 'US';
let GeoURL = null;

function CurrentWeather() {
    
    let zipcode = document.getElementById('search').value;
    
    GeoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country_code}&appid=${API_Key}`;
    console.log(zipcode);
    GetCoordinates(GeoURL);
    
}



async function GetCoordinates(GeoURL) {
    const response = await fetch(GeoURL);
    const data = await response.json();
    console.log(data);
    let lat = data.lat;
    let lon = data.lon;
    console.log(lat);
    console.log(lon);
    let WeatherURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${API_Key}`;
    
    GetWeather(WeatherURL);
  }

  async function GetWeather(WeatherURL) {
    const response = await fetch(WeatherURL);
    const data = await response.json();
    console.log(data);
    let temp = data.main.temp;

    let p = document.createElement('p');
    p.textContent = temp;

    document.body.appendChild(p);

  }