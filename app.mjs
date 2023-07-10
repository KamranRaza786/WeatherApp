async function checkWeather(city) {
	const city1 = document.getElementById("city1")
	const key = "38a9ab72fa4044218e075627230807";
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city1.value}&aqi=no`;

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
	const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=karachi&aqi=no`;

	const temp = document.querySelector("#temp");
	const temp_main = document.querySelector("#temp_main");
	const cityName = document.querySelector("#cityName");
	const img = document.querySelector("#img");

	const weather_data = await fetch(`${url}`)
		.then(Response => Response.json())
		.then((data) => {
			console.log(data);
			temp.innerHTML = `${data.current.temp_c}`;
			temp_main.innerHTML = `${data.current.temp_c} <small
			class="text-body-secondary fw-light"><sup>&deg;</sup>C</small>`;
			cityName.innerHTML = data.location.name

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