import "./App.css";
import { useState } from "react";
import axios from "axios";
import UpdateDate from "./UpdateDate";

function App() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState("");

  function showTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="flex-parent">
        <div className="box">
          <p>
            <UpdateDate date={weatherData.date} />
          </p>
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ textTransform: "capitalize" }}>{city}</h1>
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="description">{weatherData.description}</p>
        </div>
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
          <br />
          <br />
          <p className="humidity">
            <b>Humidity:</b> {weatherData.humidity}%{" "}
          </p>
          <p className="wind">
            <b>Wind: </b>
            {weatherData.wind} km/h
          </p>

          <br />
          <ul>
            <li>
              <img src="./cloudy.png" alt="" />
              <br />
              <br />
              Tues
              <br />
              25°C
            </li>
            <li>
              <img src="./cloudy.png" alt="" />
              <br />
              <br />
              Wed
              <br />
              23°C
            </li>
            <li>
              <img src="./cloudy.png" alt="" />
              <br />
              <br />
              Thu
              <br />
              24°C
            </li>
            <li>
              <img src="./cloudy.png" alt="" />
              <br />
              <br />
              Fri
              <br />
              23°C
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-parent">
        <div className="box"></div>
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
        </div>
      </div>
    );
  }
}

export default App;
