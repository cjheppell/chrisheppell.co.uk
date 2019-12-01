import React from "react"
import PropTypes from "prop-types"
import {  Container } from "semantic-ui-react"
import Header from './header'
import Footer from './footer'

import 'semantic-ui-css/semantic.min.css'

const Layout = ({ children }) => {
  return (
    <div style={{ display:"flex", minHeight:"100vh", flexDirection:"column" }}>
      <Header/>
      <Container style={{ flex: 1}}>
        {children}
      </Container>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
