import React from "react"
import { Segment, Container, List, Icon } from "semantic-ui-react"

import 'semantic-ui-css/semantic.min.css'

const Footer = () => {
  return (
    <Segment inverted vertical>
      <Container textAlign='center'>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            <p>© {new Date().getFullYear()} Chris Heppell</p>
          </List.Item>
          <List.Item as='a' href='https://github.com/cjheppell'>
            <Icon link name='github' />
          </List.Item>
          <List.Item as='a' href='https://uk.linkedin.com/in/christopherheppell'>
            <Icon link name='linkedin' />
          </List.Item>
          <List.Item as='a' href='https://twitter.com/cjheppell'>
            <Icon link name='twitter' />
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

Footer.propTypes = {
}

export default Footer
