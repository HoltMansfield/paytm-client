import { UPDATE_USER } from '../constants/actionTypes'

const initialState = null

const children = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}

export default children
