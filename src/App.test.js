import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
