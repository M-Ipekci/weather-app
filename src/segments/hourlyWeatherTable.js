import React, { useState, useEffect } from 'react';
import '../styles/hwt.css';

function HourlyWeatherTable() {
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHourlyWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=YOUR_LOCATION&appid=YOUR_API_KEY&units=imperial`);
        const data = await response.json();
        setHourlyData(data.list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error fetching hourly weather data. Please try again.');
        console.error('Error fetching hourly weather data:', error);
      }
    };

    fetchHourlyWeather();
  }, []);

  return (
    <div className="hourly-weather-table">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {hourlyData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Weather</th>
              <th>Temperature (°F)</th>
            </tr>
          </thead>
          <tbody>
            {hourlyData.map(hour => (
              <tr key={hour.dt}>
                <td>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{hour.weather[0].description}</td>
                <td>{hour.main.temp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HourlyWeatherTable;
