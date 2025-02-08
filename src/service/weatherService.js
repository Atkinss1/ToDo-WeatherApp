const APIkey = import.meta.env.VITE_WEATHER_APIKEY;

const getWeatherByCity = async (cityName) => {
  try {
    cityName = cityName.trim().toLowerCase();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
    );

    if (!response.ok) {
      return { error: response.statusText };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(`Failed to fetch weather data:, ${error.message}`);
    throw error;
  }
};

const weatherService = {
  getWeatherByCity,
};

export default weatherService;
