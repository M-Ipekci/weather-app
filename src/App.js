import React from 'react';
import WeekDayClock from './segments/weekDayClock.js';
import LocationWeather from './segments/locationWeather.js'
import HourlyWeather from './segments/hourlyWeatherTable.js'
import CurrentWeather from './segments/currentWeather.js'

function App() {
  return (
    <div className="App">
      <WeekDayClock />
      <LocationWeather />
      <HourlyWeather />
      <CurrentWeather />
    </div>
  );
}

export default App;
