import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Header, Container } from "semantic-ui-react"

import './blogpost.css'

const BlogIndex = () => {
    const data = useStaticQuery(graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
            node {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
}`)

    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO title="All posts" />
        <Container className='blogposts'>
            <Grid>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <Grid.Row>
                            <Grid key={node.fields.slug}>
                                <Grid.Row stretched>
                                    <Grid.Column>
                                        <Header as='h3' style={{'margin-bottom': 0}}>
                                            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                                {title}
                                            </Link>
                                        </Header>
                                        <p>
                                            {node.frontmatter.date}<br/>
                                        </p>
                                        <Container className="blogpost"
                                            dangerouslySetInnerHTML={{
                                                __html: node.frontmatter.description || node.excerpt,
                                            }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Row>
                    )
                })}
            </Grid>
        </Container>
      </Layout>
    )
}

export default BlogIndex