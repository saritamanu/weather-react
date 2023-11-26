import React from "react";
import "./App.css";
import UpdateDate from "./UpdateDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <p>
          <UpdateDate date={props.data.date} />
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1>{props.data.city}</h1>
        <p className="temperature">{props.data.temperature}°C</p>
        <p className="description">{props.data.description}</p>
      </div>
      <div className="box">
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
