import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function tick() {
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>It is</h2>
      {new Date().toLocaleTimeString()}
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
