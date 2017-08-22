import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from '../../actions'

export class EmployeesList extends Component {
  componentDidMount() {
    this.props.getEmployees()
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>list yo</div>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {
        getEmployees: () => dispatch(actions.post('employees/query', {}))
      }
    },
)(EmployeesList)
