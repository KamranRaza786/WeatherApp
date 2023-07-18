async function checkWeather(city) {
	const key = "38a9ab72fa4044218e075627230807";
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`;
  
	const temp = document.querySelector("#temp");
	const temp_main = document.querySelector("#temp_main");
	const cityName = document.querySelector("#cityName");
	const img = document.querySelector("#img");
  
	try {
	  const weather_data = await fetch(url);
	  const data = await weather_data.json();
	  if (data.current.condition.code === 1009) {
		console.log(data);
		temp.innerHTML = `${data.current.temp_c}`;
		temp_main.innerHTML = `${data.current.temp_c} <small class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
		cityName.innerHTML = data.location.name;
	  } else {
		document.querySelector(".container").innerHTML = data.message;
	  }
	} catch (error) {
	  console.error("Error fetching weather data:", error);
	}
  }
  
  const getWeatherData = async () => {
	const key = "38a9ab72fa4044218e075627230807";
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=islamabad&days=3&aqi=no&alerts=no`;
  
	const txt = document.querySelector("#txt");
	const cityName = document.querySelector("#cityName");
	const temp_main = document.querySelector("#temp_main");
	const temp = document.querySelector("#temp");
	const min_temp = document.querySelector("#min_temp");
	const Cloud_pct = document.querySelector("#Cloud_pct");
	const feelslike_c = document.querySelector("#feelslike_c");
	const feelslike_f = document.querySelector("#feelslike_f");
	const humidity = document.querySelector("#humidity");
	const last_updated = document.querySelector("#last_updated");
	const pressure_in = document.querySelector("#pressure_in");
	const wind_degree = document.querySelector("#wind_degree");
	const wind_dir = document.querySelector("#wind_dir");
	const wind_kph = document.querySelector("#wind_kph");
	const country = document.querySelector("#country");
	const lat = document.querySelector("#lat");
	const lon = document.querySelector("#lon");
	const uv = document.querySelector("#uv");
  
	try {
	  const weather_data = await fetch(url);
	  const data = await weather_data.json();
	  console.log(data);
  
	  txt.innerHTML = `${data.current.condition.text}`;
	  cityName.innerHTML = data.location.name;
	  temp_main.innerHTML = `${data.current.temp_c} <small class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
	  temp.innerHTML = `${data.current.temp_f} <small class="text-body-secondary fw-light"><sup>&deg;</sup>F</small>`;
	  min_temp.innerHTML = `${data.current.temp_c} <small class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
	  Cloud_pct.innerHTML = `${data.current.cloud}`;
	  feelslike_c.innerHTML = `${data.current.feelslike_c}`;
	  feelslike_f.innerHTML = `${data.current.feelslike_f}`;
	  humidity.innerHTML = `${data.current.humidity}`;
	  last_updated.innerHTML = `${data.current.last_updated}`;
	  pressure_in.innerHTML = `${data.current.pressure_in}`;
	  uv.innerHTML = `${data.current.uv}`;
	  wind_degree.innerHTML = `${data.current.wind_degree}`;
	  wind_dir.innerHTML = `${data.current.wind_dir}`;
	  wind_kph.innerHTML = `${data.current.wind_kph}`;
	  country.innerHTML = `${data.location.country}`;
	  lat.innerHTML = `${data.location.lat}`;
	  lon.innerHTML = `${data.location.lon}`;
	} catch (error) {
	  console.error("Error fetching weather data:", error);
	}
  };
  
  getWeatherData();
  
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", () => {
	const city = document.querySelector(".search-bar").value;
	checkWeather(city);
  });
  