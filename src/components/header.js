import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Menu, Segment, Container } from 'semantic-ui-react'
import { Location } from '@reach/router'

const Header = ({ siteTitle }) => {
  return <Segment inverted>
    <Container>
      <Location>
        {({ location}) => {
          return <Menu inverted pointing secondary>
            <Menu.Item header>Chris Heppell</Menu.Item>
            <Link to='/'>
              <Menu.Item
                name='home'
                active={location.pathname === '/'}
              />
            </Link>
            <Link to='/blog'>
              <Menu.Item
                name='blog'
                active={location.pathname.startsWith('/blog')}
              />
            </Link>
          </Menu>   
        }}
      </Location>
    </Container>
  </Segment>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
