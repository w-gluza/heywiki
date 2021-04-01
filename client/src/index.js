// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import redux components
import { Provider } from "react-redux";
import store from "./store";

// Connect application with Redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
