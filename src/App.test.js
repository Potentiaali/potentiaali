import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import LocalizationProvider from "./LocalizationProvider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <LocalizationProvider>
        <BrowserRouter>
          <AppWrapper />
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
