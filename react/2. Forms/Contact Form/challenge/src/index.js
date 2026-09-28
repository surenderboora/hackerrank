import React from "react";
import ReactDOM from "react-dom";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

import "./index.css";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

applyPolyfills().then(() => {
  defineCustomElements(window);
});
