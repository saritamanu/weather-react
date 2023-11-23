import "./App.css";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function App(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

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

  if (ready) {
    return <WeatherInfo data={weatherData} />;
  } else {
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature);
  }
}

export default App;
