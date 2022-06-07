import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49377281846eee971852e0a6a46bc4a0&units=metric
    `;
    axios.get(url).then(displayWeather);
    return setResult;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setResult(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt=""
          />
        </li>
      </ul>
    );
  }

  return (
    <div className="WeatherApp">
      <h1>Weather app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{result}</p>
    </div>
  );
}
