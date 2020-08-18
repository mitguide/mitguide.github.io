/**
 * The template for a section within a chapter.
 * 
 * Book > Chapters > Sections
 */

import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import styles from './section.module.scss'

deckDeckGoHighlightElement()
require(`katex/dist/katex.min.css`)

class Section extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.contentBody}>
          <h1>{ this.props.data.mdx.frontmatter.title }</h1>
          <MDXRenderer>
            { this.props.data.mdx.body }
          </MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export default Section

export const query = graphql`
query($slug: String!) {
  mdx(slug: { eq: $slug }) {
    slug
    body
    frontmatter {
      title
      slug
    }
  }
}
`