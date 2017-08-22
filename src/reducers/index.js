import { combineReducers } from 'redux'
import users from './users'
import employees from './employees'

const rootReducer = combineReducers({
  users,
  employees
})

export default rootReducer
