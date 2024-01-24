import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CapitalWeather = ({ capital }) => {
  const [weather, setWeather] = useState();

  const API_KEY = process.env.REACT_APP_API_KEY;

  function setTemperatureText(currentWeather) {
    return currentWeather && currentWeather.current && currentWeather.current.temperature
      ? `${currentWeather.current.temperature} Celsius`
      : "N/A";
  }

  function setWindText(currentWeather) {
    return currentWeather && currentWeather.current && currentWeather.current.wind
      ? `${currentWeather.current.wind}`
      : "N/A";
  }

  let weatherAPI = "http://api.weatherstack.com/current" +
  "?access_key=" + API_KEY +
  "&query=" + capital;

  const hook = () => {
    axios
      .get(weatherAPI)
      .then(response => {
        if (Array.isArray(response.data)) {
          setWeather(response.data);
        }
      });
  };

  useEffect(hook, capital)

  return (
    <div>
      <h2>Weather in { capital }</h2>
      <br/>
      <h3 style={{ display: 'inline-block', marginRight: '8px' }}>temperature: </h3>
      <p style={{ display: 'inline-block' }}>{ setTemperatureText(weather) }</p>
      <br/>
      <h3 style={{ display: 'inline-block', marginRight: '8px' }}>wind: </h3>
      <p style={{ display: 'inline-block' }}>{ setWindText(weather) }</p>
    </div>
  )
}

export default CapitalWeather;