import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './'


export class Login extends Component {
  render() {
    const { user } = this.props

    if(!user) {
      return (
        <div>
          <div><input type="text" placeholder="first name" /></div>
          <div><input type="text" placeholder="last name" /></div>
          <div><button>Login</button></div>
        </div>
      )
    }

    return null
  }
}

export default connect(
  () =>,
  dispatch => {
      return {
        updateUser: user = > dispatch(actions.updateUser(user))
      }
  }
)(Login)
