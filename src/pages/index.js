import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Card, Grid, Container, Header } from "semantic-ui-react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    query {
      chrisHeppellImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const renderCard = () => {
    return (
      <Card>
        <Img fluid={data.chrisHeppellImage.childImageSharp.fluid} />
        <Card.Content>
          <Card.Header>Chris Heppell</Card.Header>
          <Card.Description>
            Lead Software Engineer at Redgate Software.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }

  const renderAboutMe = () => {
    return (
      <Container>
        <Header as='h2'>About me</Header>
        <p>I'm currently a Lead Software Engineer at Redgate Software. This involves working on initiatives across teams to improve the engineering at Redgate division-wide.</p>
        <p>Alongside these wider responsibilities, day-to-day I'm an engineer in the research and development division "Foundry".</p>
        <p>In this role, I'm involved in early stage user research to validate problems and explore potential solutions by building software.</p>

        <Header as='h3'>Projects</Header>
        <p>Most projects I build at Redgate involve writing C# across the whole stack. This involves Desktop development (GUI and CLI), as well as web applications typically using ASP.NET Core backends, with React JS frontends.</p>
        <p>Currently, I'm developing microservice style applications, deploying to Kubernetes. As part of this effort, I'm also learning and writing Golang.</p>
      </Container>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Grid stretched>
        <Grid.Row stretched>
          <Grid.Column stretched width={4}>
              {renderCard()}
          </Grid.Column>
          <Grid.Column stretched verticalAlign='middle' width={12}>
              {renderAboutMe()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

export default IndexPage
