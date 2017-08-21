import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom';

import './index.css'
import App from './components/app/App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
