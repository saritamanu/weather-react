import React from "react";
import "./App.css";
import UpdateDate from "./UpdateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <p className="date">
          <UpdateDate date={props.data.date} />
        </p>
        <div className="mainIcon">
          <WeatherIcon code={props.data.icon} className="mainIcon" />
        </div>
        <h1>{props.data.city}</h1>
        <WeatherTemperature celsius={props.data.temperature} />
        <p className="description">{props.data.description}</p>
      </div>
    </div>
  );
}
