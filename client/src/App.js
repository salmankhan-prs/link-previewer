import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import getMetaData from "./metaTagsGenrator/metaTags";

function App() {
  const demo = async () => {
    const result = await axios(
      `http://${window.location.host}/api/v1/meta?url=https://google.com`
    );
    console.log(window.location.hostname);
  };
  demo();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
