async function checkWeather(city) {
	const key = "38a9ab72fa4044218e075627230807";
	const url = "https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no";
	
  const temp = document.querySelector("#temp");
  const img = document.querySelector("#img");

	const weather_data = await fetch(`${url}`)
		.then(Response => Response.json());

	temperature.innerHTML = `${weather_data.current.temp_c}`;

	
}
const getWeatherData = () => {
	const res = axios
	  .get(`${BASE_URL}/v1/current.json?key=${key}&q=${city}&aqi=no`)
	  .then((res) => console.log("res", res))
	  .catch((err) => console.log("err", err));
  };
searchBtn.addEventListener(`click`, () => {
	checkWeather();
})

//} catch (err) {

   // console.log("err", err);
   // console.log("err", err.response.data.error.message);
    // Showing error in UI
   // temp.textContent = err.response.data.error.message;
 // }