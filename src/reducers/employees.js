import { UPDATE_EMPLOYEES } from '../constants/actionTypes'

const initialState = []

const employees = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES:
      return [...action.employees]
    default:
      return state
  }
}

export default employees
