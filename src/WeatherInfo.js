import { useState } from "react";
import UpdateDate from "./UpdateDate";
import App from "./App";

export default function WeatherInfo(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="flex-parent">
      <div className="box">
        <p>
          <UpdateDate date={props.data.date} />
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
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            onChange={updateCity}
            placeholder="Search city..."
            autoFocus="on"
          />
          <input className="submit" type="submit" value="Search" />
        </form>
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
