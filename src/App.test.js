import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import clockReducer from "./reducers/ClockReducer";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";

const reducer = combineReducers({
  clock: clockReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
