const APIkey = import.meta.env.VITE_WEATHER_APIKEY;

const getWeatherByCity = async (cityName) => {

  cityName = cityName.trim().toLowerCase();

	const data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
	);

	const response = await data.json();
	console.log(response);
};

const weatherService = {
	getWeatherByCity,
};

export default weatherService;
