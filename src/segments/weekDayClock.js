import React, { useState, useEffect } from 'react';
import '../styles/wdc.css';

function WeekDayClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const dayOfWeek = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = dateTime.toLocaleTimeString('en-US');

  return (
    <div>
      <h2>{dayOfWeek}</h2>
      <p>{currentTime}</p>
    </div>
  );
}

export default WeekDayClock;
