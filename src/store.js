import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import ScheduleReducer from "./reducers/ScheduleReducer";
import LocalizationReducer from "./reducers/LocalizationReducer";

const reducer = combineReducers({
  schedule: ScheduleReducer,
  localization: LocalizationReducer
});

const middleware = [thunk];

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
