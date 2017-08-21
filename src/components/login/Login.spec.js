import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { Login } from './Login'

describe('Login component',  () => {
  it('renders nothing when user is logged in', () => {
    const wrapper = shallow(<Login user={ { first: 'Holt', last: 'Mansfield', isAdmin: false } } />)
    const divs = wrapper.find('div')

    expect(divs.length).toEqual(0)
  });

  it('renders the logged in user', () => {
    const wrapper = shallow(<Login user={null} />)
    const divs = wrapper.find('div')

    expect(divs.length).toEqual(4)
  });
})
