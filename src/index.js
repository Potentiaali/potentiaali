import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import clockReducer from "./reducers/ClockReducer";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import ScheduleReducer from "./reducers/ScheduleReducer";

const reducer = combineReducers({
  clock: clockReducer,
  schedule: ScheduleReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
