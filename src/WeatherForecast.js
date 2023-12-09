import { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (index < 4) {
            return (
              <ul key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </ul>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiId = `99b8f9330a1bfba3a85e523fd3c2e528`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiId}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
