import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { App } from './App';

describe('App component',  () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App user={{}} />, div);
  });

  it('renders user object', () => {
    const props = {
      user: {}
    }
    const component = shallow(<App user={props.user} />)
  });
})
