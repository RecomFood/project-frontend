import React, {useEffect} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

//axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
	  axiosTest();
  });
  
  const axiosTest = () => {
	  axios.get("http://54.151.0.147:5050/")
	  .then(res => console.log(res.data))
	  .catch(err => console.log(err));
  };

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
