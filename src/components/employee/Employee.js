import React, { Component } from 'react'

export class employee extends Component {
  render() {
    const { employee } = this.props
    return (
      <div>
        <span>{ employee.first } { employee.last }</span>
      </div>
    )
  }
}

export default employee
