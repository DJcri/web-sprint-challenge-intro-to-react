import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import { BASE_URL } from "./constants";

import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState(null);

  //define api request functions
  const getPlanet = (planetURL, setPlanet) => {
    axios
      .get(planetURL)
      .then((res) => {
        setPlanet(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get(`${BASE_URL}people/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //set data on mount
  useEffect(getData, []);

  //return nothing if data doesn't exist
  if (!data) {
    return null;
  }

  //if data exists then return app
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters-container">
        {data.map((v, i) => {
          return <Character key={i} data={data[i]} getPlanet={getPlanet} />;
        })}
      </div>
    </div>
  );
};

export default App;
