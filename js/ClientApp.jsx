// @flow

import React from "react";
import { render } from "react-dom";
// import "node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
