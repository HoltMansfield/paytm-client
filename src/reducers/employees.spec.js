import employees from './employees'
import * as types from '../constants/ActionTypes'


describe('employees reducer', () => {
  const initialState = null

  it('should handle initial state', () => {
    expect(employees(initialState, {})).toEqual(initialState)
  })

  it('should handle UPDATE_EMPLOYEES', () => {
    const expectedEmployees = [{ first: 'Mike' }]

    const result = employees(initialState,
      {
        type: types.UPDATE_EMPLOYEES,
        employees: expectedEmployees
      });

    expect(result).toEqual(expectedEmployees)
  })

})
