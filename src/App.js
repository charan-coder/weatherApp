import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          charan singh
        </a>{" "}
        | write a {" "}
        <a target="_blank" href="">
          single line of code
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
