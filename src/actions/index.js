import * as types from '../constants/actionTypes'
import axios from 'axios'
import { notify } from 'react-notify-toast'

// user
export const updateUser = user => ({ type: types.UPDATE_USER, user })

// employees
export const updateEmployees = employees => ({ type: types.UPDATE_EMPLOYEES, employees })

// http
export const post = (url, data) => {
  return dispatch => {
    return axios.post(`http://localhost:5000/api/${url}`, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        notify.show('Server is down', 'error', 2000)
      })
  }
}
