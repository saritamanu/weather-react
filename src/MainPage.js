import "./App.css";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherInfoSub from "./WeatherInfoSub";

export default function MainPage(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
    setReady(true);
    console.log(weatherData);
  }

  if (ready) {
    return (
      <div className="flex-parent">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              type="search"
              onChange={updateCity}
              placeholder="Search city..."
              autoFocus="on"
            />
            <input className="submit" type="submit" value="Search" />
          </form>
          <WeatherInfo data={weatherData} />
          <br />
        </div>
        <div className="box">
          <WeatherInfoSub data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
