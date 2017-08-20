import * as types from '../constants/ActionTypes'
import * as actions from './'

describe('user actions', () => {
  it('updateUser should create UPDATE_USER action', () => {
    const expectedUser = {};

    expect(actions.updateUser(expectedUser)).toEqual({
      type: types.UPDATE_USER,
      user: expectedUser
    })
  })
})
