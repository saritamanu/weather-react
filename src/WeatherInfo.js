import React from "react";
import "./App.css";
import UpdateDate from "./UpdateDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <p className="date">
          <UpdateDate date={props.data.date} />
        </p>
        <WeatherIcon code={props.data.icon} />
        <br />
        <h1>{props.data.city}</h1>
        <p className="temperature">{props.data.temperature}°C</p>
        <p className="description">{props.data.description}</p>
      </div>
    </div>
  );
}
