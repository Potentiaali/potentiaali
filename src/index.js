import React from "react";
import ReactDOM from "react-dom";
import "./reset.scss";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import LocalizationProvider from "./LocalizationProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <LocalizationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizationProvider>
  </Provider>,
  document.getElementById("root")
);

// Service worker is disabled for now.
serviceWorker.unregister();
