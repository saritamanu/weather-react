import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast",
    "04n": "overcast",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-day-rain",
    "11d": "thunderstorms",
    "11n": "thunderstorms",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  let icon = codeMapping[props.code];
  return (
    <img
      src={`https://bmcdn.nl/assets/weather-icons/v2.0/line/${icon}.svg`}
      alt="Partly Cloudy Day"
      height="100"
    />
  );
}
