

let API_Key = "fcdad555357675fa31f08e394ede826d";
let GeoURL = null;
let WeatherURL = null;
let lat = null;
let lon = null;
let temp = null;
let country_code = 'US';
let zipcode = null;

const divItem = document.getElementById('enter');	
divItem.addEventListener('click', Displaytemp);

function Displaytemp() {
  zipcode = document.getElementById('search').value;
  let temp = null;
  GeoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country_code}&appid=${API_Key}`;
  console.log(zipcode);
  GetCoordinates(GeoURL);
}

async function GetCoordinates(GeoURL) {
  const response = await fetch(GeoURL);
  const data = await response.json();
  lat = data.lat;
  lon = data.lon;
  console.log(lat);
  console.log(lon);
  WeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_Key}`;
  GetMap();
  GetWeather(WeatherURL);
}


async function GetMap() {
  
  
  const map = L.map('map').setView([lat, lon], 7);
  

  const tileURL = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_Key}`;
  console.log(tileURL);
  const tiles = L.tileLayer(tileURL);
  
  tiles.addTo(map);

  
  console.log(lat);
  console.log(lon);

}


async function GetWeather(WeatherURL) {
  
  let date = null;
  let feels_like = null;
  let temp_min = null;
  let temp_max = null;
  let pressure = null;
  let humididty = null;
  
  const response = await fetch(WeatherURL);
  const data = await response.json();
  
  //for each loop that gets data for each of the days, then creates a div that displays the data
  //layout date   temp     feels like   temp_min    temp_max   temp_pressure  humididty
  
  //display each in a table within a div
  let div = document.createElement('DIV');
  div.className = 'result';
  
  data.list.forEach(element => {
    //get values
    temp = element.main.temp;
    date = element.dt_txt;
    feels_like = element.main.feels_like;
    temp_min = element.main.temp_min;
    temp_max = element.main.temp_max;
    pressure = element.main.pressure;
    humididty = element.main.humidity;

  

    //display each in a table within a div
    //let div = document.createElement('DIV');
    //div.className = 'result';
    
    let table = document.createElement('table');

    div.appendChild(table);

    
    let tr = document.createElement('tr');

    let tr2 = document.createElement('tr');


    table.appendChild(tr);
    table.appendChild(tr2);
    //date
    let th = document.createElement('th');
    let thd = document.createElement('th');

    th.textContent = 'Date';

    thd.textContent = date;

    tr.appendChild(th);
    tr2.appendChild(thd);
    //Temp
    
    let th2 = document.createElement('th');
    let thd1 = document.createElement('th');
    th2.textContent = 'Temperature';

    thd1.textContent = temp;

    tr.appendChild(th2);
    tr2.appendChild(thd1);

    //feels like
    let th3 = document.createElement('th');
    let thd2 = document.createElement('th');
    th3.textContent = 'Feels like';

    thd2.textContent = feels_like;

    tr.appendChild(th3);
    tr2.appendChild(thd2);

    //Min temp
    let th4 = document.createElement('th');
    let thd3 = document.createElement('th');
    th4.textContent = 'Min Temp';

    thd3.textContent = temp_min;

    tr.appendChild(th4);
    tr2.appendChild(thd3);

    //Max temp
    let th5 = document.createElement('th');
    let thd4 = document.createElement('th');
    th5.textContent = 'Max Temp';

    thd4.textContent = temp_max;

    tr.appendChild(th5);
    tr2.appendChild(thd4);

    //pressure
    let th6 = document.createElement('th');
    let thd5 = document.createElement('th');
    th6.textContent = 'Pressure';

    thd5.textContent = pressure;

    tr.appendChild(th6);
    tr2.appendChild(thd5);

    //humididty
    let th7 = document.createElement('th');
    let thd6 = document.createElement('th');
    th7.textContent = 'Humididty';

    thd6.textContent = humididty;

    tr.appendChild(th7);
    tr2.appendChild(thd6);

    //add div to the html body
    //document.body.appendChild(div);
    





  });
  //add div to the html body
  document.body.appendChild(div);
  
}


