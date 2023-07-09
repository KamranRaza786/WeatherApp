import axios from 'node_modulesaxioslibaxios.js';

const getWeather = async (city) => {
  console.log("city", city);
const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'Seattle'},
  headers: {
    'X-RapidAPI-Key': '353a974ae7msh7ede14095bb7392p14cd1ejsnb21da3c72da6',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

try {
  const response = await axios(options);
  const data = response.data;

  console.log("response", response);

  cityName.innerHTML = `Weather of ${city}`;
  min_temp.innerHTML = data.min_temp;
  max_temp.innerHTML = data.max_temp;
  wind_degrees.innerHTML = data.wind_degrees;
  wind_degrees2.innerHTML = data.wind_degrees;
  humidity2.innerHTML = data.humidity;
  humidity.innerHTML = data.humidity;
  cloud_pct.innerHTML = data.cloud_pct;
  feels_like.innerHTML = data.feels_like;
  temp.innerHTML = data.temp;
  temp2.innerHTML = data.temp;
  wind_speed.innerHTML = data.wind_speed;
} catch (err) {

  console.log("err", err);
  console.log("err", err.response.data.error.message);
  // Showing error in UI
  temp.textContent = err.response.data.error.message;
}
};

submit.addEventListener("click", (e) => {
 e.preventDefault();
 const city = document.querySelector("#city").value;
 getWeather(city);
});

getWeather("karachi");
