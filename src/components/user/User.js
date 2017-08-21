import React, { Component } from 'react'


class User extends Component {
  render() {
    const { user } = this.props

    if(user) {
      return (
          <div>Logged in as { user.first }</div>
      )
    }

    return null
  }
}

export default User
