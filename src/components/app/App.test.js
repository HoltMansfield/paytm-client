import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import App from './App'

describe('App component',  () => {
  it('renders non-admin user menu', () => {
    const props = {
      user: { isAdmin: false }
    }
    const wrapper = shallow(<App user={props.user} />).dive()
    const links = wrapper.find(Link)

    expect(links.length).toEqual(1)
  });

  it('renders admin user menu', () => {
    const props = {
      user: { isAdmin: true }
    }
    const wrapper = shallow(<App user={props.user} />).dive()
    const links = wrapper.find(Link)

    expect(links.length).toEqual(2)
  });

  it('does not render a menu for null user', () => {
    const props = {
      user: null
    }
    const wrapper = shallow(<App user={props.user} />).dive()
    const links = wrapper.find(Link)

    expect(links.length).toEqual(0)
  });
})
