import users from './users'
import * as types from '../constants/ActionTypes'


describe('users reducer', () => {
  const initialState = undefined

  it('should handle initial state', () => {
    expect(users(initialState, {})).toEqual(undefined)
  })

  it('should handle UPDATE_USER with a valid user object', () => {
    const expectedUser = { first: 'DeMar', last: 'DeRozan', isAdmin: false }

    const result = users(initialState,
      {
        type: types.UPDATE_USER,
        user: expectedUser
      });

    expect(result).toEqual(expectedUser)
  })

})
