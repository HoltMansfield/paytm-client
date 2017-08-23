import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import Employee from '../employee/Employee'

export class EmployeesList extends Component {
  componentDidMount() {
    this.props.getEmployees()
      .then(data => {
        this.props.updateEmployees(data)
      })
  }

  render() {
    const { employees } = this.props

      if(this.props.employees.length > 0) {
        return (
          <div>
            {
              employees.map(e => (<Employee key={e._id} employee={e} />))
            }
          </div>
        )
      }

      return null
  }
}

export default connect(
  state => { return {
        employees: state.employees
      }
    },
  dispatch => { return {
        getEmployees: () => dispatch(actions.post('employees/query', {})),
        updateEmployees: employees => dispatch(actions.updateEmployees(employees)),
      }
    },
)(EmployeesList)
