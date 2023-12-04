import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiId = `96771e971243152d6b8948878c26`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${apiId}`;
  axios.get(url).then(handleResponse);

  return (
    <div>
      <ul>
        <li>
          <div className="icon">
            <WeatherIcon code="01d" />
          </div>
          Tues
          <br />
          <b>25°C</b>
          <br />
          <small>12°C</small>
        </li>
        <li>
          <div className="icon">
            <WeatherIcon code="01d" />
          </div>
          Wed
          <br />
          <b>23°C</b>
          <br />
          <small>12°C</small>
        </li>
        <li>
          <div className="icon">
            <WeatherIcon code="01d" />
          </div>
          Thu
          <br />
          <b>24°C</b>
          <br />
          <small>12°C</small>
        </li>
        <li>
          <div className="icon">
            <WeatherIcon code="01d" />
          </div>
          Fri
          <br />
          <b>23°C</b>
          <br />
          <small>12°C</small>
        </li>
      </ul>
    </div>
  );
}
