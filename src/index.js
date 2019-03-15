import React from "react";
import ReactDOM from "react-dom";
import "./reset.scss";
import "./index.scss";
import AppWrapper from "./AppWrapper";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
