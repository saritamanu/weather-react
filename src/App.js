import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [date] = useState(updateDate());
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    console.log(response.data);
  }
  function updateDate() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[today.getDay()];
    return `${day}, ${hours}:${minutes}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature, updateDate);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature != null) {
    return (
      <div className="flex-parent">
        <div className="box">
          <p>{date}</p>
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ textTransform: "capitalize" }}>{city}</h1>
          <p className="temperature">{temperature}°C</p>
          <p className="description">{description}</p>
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
            <b>Humidity:</b> {humidity}%{" "}
          </p>
          <p className="wind">
            <b>Wind: </b>
            {wind} km/h
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
