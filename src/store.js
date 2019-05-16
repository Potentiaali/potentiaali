import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ScheduleReducer from "./reducers/ScheduleReducer";
import LocalizationReducer from "./reducers/LocalizationReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  schedule: ScheduleReducer,
  localization: LocalizationReducer
});

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
