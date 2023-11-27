import React from "react";
import "./App.css";
import UpdateDate from "./UpdateDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <p>
          test
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
    </div>
  );
}
