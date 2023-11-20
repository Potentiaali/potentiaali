import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import ScheduleReducer from './reducers/ScheduleReducer'
import SpeedRekryReducer from './reducers/SpeedRekryReducer'
import CompanyReducer from './reducers/CompanyReducer'
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = combineReducers({
  schedule: ScheduleReducer,
  speedRekry: SpeedRekryReducer,
  company: CompanyReducer
})

const middleware = [thunk]

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
