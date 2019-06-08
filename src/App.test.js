import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "./store";
import LocalizationProvider from "./LocalizationProvider";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <LocalizationProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </LocalizationProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
