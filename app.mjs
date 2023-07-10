async function checkWeather(city) {
	const city1 = document.getElementById("city1")
	const key = "38a9ab72fa4044218e075627230807";
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city1.value}&days=3&aqi=no&alerts=no`;

	const temp = document.querySelector("#temp");
	const temp_main = document.querySelector("#temp_main");
	const cityName = document.querySelector("#cityName");
	const img = document.querySelector("#img");

	const weather_data = await fetch(`${url}`)
		.then(Response => Response.json())
		.then((data) => {
			if (data.current.condition.code === 1009) {
				console.log(data);
				temp.innerHTML = `${data.current.temp_c}`;
				temp_main.innerHTML = `${data.current.temp_c} <small
				class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
				cityName.innerHTML = data.location.name
			} else {
				document.querySelector(".container").innerHTML = data.message
			}

		})

	city1.value = ""

}
const getWeatherData = async () => {
	const key = "38a9ab72fa4044218e075627230807";
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=islamabad&days=3&aqi=no&alerts=no`;

	//const img = document.querySelector("#img");
	const txt = document.querySelector("#txt");
	const cityName = document.querySelector("#cityName");
	const temp_main = document.querySelector("#temp_main");
	const temp = document.querySelector("#temp");
	const min_temp = document.querySelector("#min_temp");
	const Cloud_pct = document.querySelector("#Cloud_pct")
	const feelslike_c = document.querySelector("#feelslike_c");
	const feelslike_f = document.querySelector("#feelslike_f");
	//const gust_kph = document.querySelector("#gust_kph");
	//const gust_mph = document.querySelector("#gust_mph");
	const humidity = document.querySelector("#humidity");
	const last_updated = document.querySelector("#last_updated");
	//const is_day = document.querySelector("#is_day");
	//const last_updated_epoch = document.querySelector("#last_updated_epoch");
	//const precip_in = document.querySelector("#precip_in");
	//const precip_mm = document.querySelector("#precip_mm");
	const pressure_in = document.querySelector("#pressure_in");
	//const pressure_mb = document.querySelector("#pressure_mb");
	//const vis_km = document.querySelector("#vis_km");
	//const vis_miles = document.querySelector("#vis_miles");
	const wind_degree = document.querySelector("#wind_degree");
	const wind_dir = document.querySelector("#wind_dir");
	const wind_kph = document.querySelector("#wind_kph");
	//const wind_mph = document.querySelector("#wind_mph");
	const country = document.querySelector("#country");
	const lat = document.querySelector("#lat");
	//const localtime = document.querySelector("#localtime");
	//const localtime_epoch = document.querySelector("#localtime_epoch");
	const lon = document.querySelector("#lon");
	const uv = document.querySelector("#uv");
	//const region = document.querySelector("#region");
	//const tz_id = document.querySelector("#tz_id");


	const weather_data = await fetch(`${url}`)
		.then(Response => Response.json())
		.then((data) => {
			console.log(data);

			//img.innerHTML = `${data.current.condition.icon}`
			txt.innerHTML = `${data.current.condition.text}`
			cityName.innerHTML = data.location.name
			temp_main.innerHTML = `${data.current.temp_c} <small
			class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
			temp.innerHTML = `${data.current.temp_f} <small
			class="text-body-secondary fw-light"><sup>&deg;</sup>F</small>`;
			min_temp.innerHTML = `${data.current.temp_c} <small
			class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
			Cloud_pct.innerHTML = `${data.current.cloud}`;
			feelslike_c.innerHTML = `${data.current.feelslike_c}`;
			feelslike_f.innerHTML = `${data.current.feelslike_f}`;
			//gust_kph.innerHTML = `${data.current.gust_kph}`;
			//gust_mph.innerHTML = `${data.current.gust_mph}`;
			humidity.innerHTML = `${data.current.humidity}`;
			last_updated.innerHTML = `${data.current.last_updated}`;
			//is_day.innerHTML = `${data.current.is_day}`;
			//last_updated_epoch.innerHTML = `${data.current.last_updated_epoch}`;
			//precip_in.innerHTML = `${data.current.precip_in}`;
			//precip_mm.innerHTML = `${data.current.precip_mm}`;
			pressure_in.innerHTML = `${data.current.pressure_in}`;
			//pressure_mb.innerHTML = `${data.current.pressure_mb}`;
			uv.innerHTML = `${data.current.uv}`;
			//vis_km.innerHTML = `${data.current.vis_km}`;
			//vis_miles.innerHTML = `${data.current.vis_miles}`;
			wind_degree.innerHTML = `${data.current.wind_degree}`;
			wind_dir.innerHTML = `${data.current.wind_dir}`;
			wind_kph.innerHTML = `${data.current.wind_kph}`;
			//wind_mph.innerHTML = `${data.current.wind_mph}`;
			country.innerHTML = `${data.location.country}`;
			lat.innerHTML = `${data.location.lat}`;
			//localtime.innerHTML = `${data.location.localtime}`;
			//localtime_epoch.innerHTML = `${data.location.localtime_epoch}`;
			lon.innerHTML = `${data.location.lon}`;
			//region.innerHTML = `${data.location.region}`;
			//tz_id.innerHTML = `${data.location.tz_id}`;
		})

};
getWeatherData()
searchBtn.addEventListener(`click`, () => {
	checkWeather();
})

//} catch (err) {

   // console.log("err", err);
   // console.log("err", err.response.data.error.message);
    // Showing error in UI
   // temp.textContent = err.response.data.error.message;
 // }