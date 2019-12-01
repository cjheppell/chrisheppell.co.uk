import React from "react"
import PropTypes from "prop-types"
import { Grid, Container } from "semantic-ui-react"

import 'semantic-ui-css/semantic.min.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row><p>Header</p></Grid.Row>
        <Grid.Row>
          <Container>
            {children}
          </Container>
        </Grid.Row>
        <Grid.Row><p>Footer</p></Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
