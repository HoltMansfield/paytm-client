import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
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
