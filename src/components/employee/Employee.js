import React, { Component } from 'react'
import { connect } from 'react-redux'


export class employee extends Component {
  render() {
    const { employee } = this.props
    return (
      <div>
        <span>{ employee.first } { employee.last } { employee.isAdmin ? '[Admin]' : '' }</span>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {

    }
  },
  dispatch => {
    return {

    }
  }
) (employee)
