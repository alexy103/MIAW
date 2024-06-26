import React, { useState } from "react";
import ReactDOM from "react-dom";
import PlaybulbDecouverte from "./app";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <PlaybulbDecouverte />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register();
