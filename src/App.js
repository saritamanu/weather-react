import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiId = `96771e971243152d6b8948878c26`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}adde&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature != null) {
    return (
      <div className="flex-parent">
        <div className="box">
          <br />
          <br />
          <h1>{city}</h1>
          <h2>{temperature}</h2>
        </div>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateCity} />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-parent">
        <div className="box">
          <br />
          <br />
          <h1></h1>
          <h2></h2>
        </div>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateCity} />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
