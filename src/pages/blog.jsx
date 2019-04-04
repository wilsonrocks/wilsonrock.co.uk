import React from "react"
import { graphql } from "gatsby"

const Blog = ({
  data: {
    allMarkdownRemark: {
      nodes
    }
  }
}) => (
    <div>
      {
        nodes.map(({ html, frontmatter: { title, date } }) => <div><h1>{title}</h1><h2>{date}</h2><div dangerouslySetInnerHTML={{__html:html}}></div></div>)
      }
    </div>
  );

export const pageQuery = graphql`
query {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        title
        date
      }
    }
  }}`;


export default Blog
