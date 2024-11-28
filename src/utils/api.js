import axios from 'axios';

export const fetchWeatherData = async (city, setWeatherData, setHourlyForecast, setError, setLoading) => {
  if (!city.trim()) return;
  setLoading(true);
  try {
    const weatherResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setWeatherData(weatherResponse.data);

    const forecastResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setHourlyForecast(forecastResponse.data.list.slice(0, 12)); // Next 12 hours
    setError(null);
  } catch (err) {
    setError('City not found');
    setWeatherData(null);
    setHourlyForecast(null);
  } finally {
    setLoading(false);
  }
};