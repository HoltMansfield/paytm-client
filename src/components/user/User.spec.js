import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import User from './User'

describe('App component',  () => {
  it('renders nothing when user is not logged in', () => {
    const wrapper = shallow(<User user={null} />)
    const divs = wrapper.find('div')

    expect(divs.length).toEqual(0)
  });

  it('renders the logged in user', () => {
    const wrapper = shallow(<User user={ { first: 'Holt', last: 'Mansfield', isAdmin: false } } />)
    const divs = wrapper.find('div')

    expect(divs.length).toEqual(1)
  });
})
