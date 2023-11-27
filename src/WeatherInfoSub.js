import React from "react";
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
}
