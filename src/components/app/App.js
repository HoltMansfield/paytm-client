import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import './App.css';
import User from '../user/User'
import Login from '../login/Login'

export class App extends Component {
  getLinks() {
    if(this.props.user) {
      if(this.props.user.isAdmin) {
        return (
          <div>
            <div><Link to="/employees">Employees</Link></div>
            <div><Link to="/my-reviews">My Review</Link></div>
          </div>
        )
      }

      return (
        <nav>
          <div><Link to="/my-reviews">My Reviews</Link></div>
        </nav>
      )
    }

    return null;
  }

  render() {
    const { user } = this.props

    return (
      <div className="App">
        <Notifications />
        <User user={user} />
        <Login user={user} />
        {this.getLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(
  mapStateToProps
)(App);
