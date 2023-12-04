import React from "react";
import WeatherForecast from "./WeatherForecast";

import "./App.css";

export default function WeatherInfoSub(props) {
  return (
    <div>
      <div>
        <br />
        <br />
        <p className="humidity">
          <b>Humidity:</b> {props.data.humidity}%{" "}
        </p>
        <p className="wind">
          <b>Wind: </b>
          {props.data.wind} km/h
        </p>
        <br />
        <WeatherForecast coordinates={props.data.coordinates} />
      </div>
    </div>
  );
}
