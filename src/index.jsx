import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./state/reducer";
import { StateProvider } from "./state/provider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
