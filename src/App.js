import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [date, setDate] = useState(updateDate());
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

  function handleSubmit(event) {
    event.preventDefault();
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${date}/${month}/${year}`;
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
          <h1 style={{ textTransform: "capitalize" }}>{city}</h1>
          <p>{temperature}°C</p>
          <p>{description}</p>
        </div>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateCity} />
            <input type="submit" value="Search" />
          </form>
          <p className="humidity">Humidity: {humidity}% </p>
          <p className="wind">Wind: {wind} km/h</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-parent">
        <div className="box"></div>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateCity} />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
