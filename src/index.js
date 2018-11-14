import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppWrapper from "./AppWrapper";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import clockReducer from "./reducers/ClockReducer";
import thunk from "redux-thunk";
import ScheduleReducer from "./reducers/ScheduleReducer";
import LocalizationReducer from "./reducers/LocalizationReducer";

const reducer = combineReducers({
  clock: clockReducer,
  schedule: ScheduleReducer,
  localization: LocalizationReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
