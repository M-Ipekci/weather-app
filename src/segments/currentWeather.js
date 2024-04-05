import React, { useState, useEffect } from 'react';
import '../styles/cw.css';

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=YOUR_LOCATION&appid=YOUR_API_KEY&units=imperial`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error fetching current weather data. Please try again.');
        console.error('Error fetching current weather data:', error);
      }
    };

    fetchCurrentWeather();
  }, []);

  return (
    <div className="current-weather">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Temperature Range: {weatherData.main.temp_min}°F - {weatherData.main.temp_max}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;
