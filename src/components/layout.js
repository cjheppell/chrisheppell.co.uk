import React from "react"
import PropTypes from "prop-types"
import { Grid, Container } from "semantic-ui-react"
import Header from './header'

import 'semantic-ui-css/semantic.min.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row>
          <Header/>
        </Grid.Row>
        <Grid.Row>
          <Container>
            {children}
          </Container>
        </Grid.Row>
        <Grid.Row className="footer"><p>Footer</p></Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
