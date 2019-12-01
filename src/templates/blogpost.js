import React from "react"
import { graphql } from "gatsby"
import { Grid, Container, Header } from "semantic-ui-react"
import { DiscussionEmbed } from 'disqus-react' 

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    const disqusConfig = {
      shortname: 'www-chrisheppell-co-uk',
      config: { identifier: post.id, title: post.frontmatter.title },
    }

    return (
        <Layout location={this.props.location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <Grid>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Header as='h1' style={{'margin-bottom': 0}}>
                            {post.frontmatter.title}
                        </Header>
                        <p>
                            {post.frontmatter.date}
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Container style={{paddingBottom: '1em'}} dangerouslySetInnerHTML={{ __html: post.html }}/>
                </Grid.Row>
            </Grid>
            <DiscussionEmbed {...disqusConfig} /> 
        </Layout>
    )}
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`