import "./App.css";

import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <div className="flex-parent">
        <MainPage defaultCity="New York" />
      </div>
      <br />
      <footer>
        <a href="https://github.com/saritamanu/weather-react" rel="noreferrer">
          Open Source Code{" "}
        </a>
        by{" "}
        <a href="https://github.com/saritamanu" rel="noreferrer">
          Sara Dias
        </a>
      </footer>
    </div>
  );
}

export default App;
