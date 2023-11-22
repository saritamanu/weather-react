import React from "react";
import { useState } from "react";
import "./App.css";

export default function Form(props) {
  let [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
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
  );
}
