import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import { notify } from 'react-notify-toast'
import axios from 'axios'

import * as actions from '../../actions'


export class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    axios.post = axios.post.bind(this)
  }

  login() {
    let that = this;
    const loginAttempt = {
      first: ReactDOM.findDOMNode(this.refs.first).value,
      last: ReactDOM.findDOMNode(this.refs.last).value
    }

    axios.post('http://localhost:5000/api/employees/login', loginAttempt)
      .then(response => {
        if(typeof response.data === "object") {
          that.props.updateUser(response.data)
        } else {
          notify.show('Login Failed!', 'error', 2000)
        }
      })
      .catch(function (error) {
        notify.show('Server is down', 'error', 2000)
      })
  }

  render() {
    const { user } = this.props

    if(!user) {
      return (
        <div>
          <div><input type="text" placeholder="first name" ref="first" /></div>
          <div><input type="text" placeholder="last name" ref="last" /></div>
          <div><button onClick={this.login}>Login</button></div>
        </div>
      )
    }

    return null
  }
}

export default connect(
  () => { return {} },
  dispatch => {
      return {
        updateUser: user => dispatch(actions.updateUser(user))
      }
  }
)(Login)
