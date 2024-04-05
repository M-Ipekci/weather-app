import React, { useState } from 'react';
import '../styles/lw.css';

function LocationWeather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=imperial`);
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Error fetching weather data. Please try again.');
      console.error('Error fetching weather data:', error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="location-weather">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
        </div>
      )}
    </div>
  );
}

export default LocationWeather;
