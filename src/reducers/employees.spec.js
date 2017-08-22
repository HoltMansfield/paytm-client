import employees from './employees'
import * as types from '../constants/ActionTypes'


describe('employees reducer', () => {
  const initialState = null

  it('should handle initial state', () => {
    expect(employees(initialState, {})).toEqual(initialState)
  })
})
