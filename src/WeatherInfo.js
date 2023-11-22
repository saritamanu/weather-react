import React from "react";
import UpdateDate from "./UpdateDate";
import Form from "./Form";
import App from "./App";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="flex-parent">
      <div className="box">
        <p>
          <UpdateDate data={props.data.date} />
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textTransform: "capitalize" }}>{city}</h1>
        <p className="temperature">{props.data.temperature}°C</p>
        <p className="description">{props.data.description}</p>
      </div>
      <div className="box">
        <Form data={props.defaultCity.city} />
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
