import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom';

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'
import App from './components/app/App'
import EmployeesList from './components/employeesList/EmployeesList'


const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path ="/employees" component={EmployeesList} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
