import React from "react"
import { graphql } from "gatsby"
import "../components/layout.css"


const Blog = ({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) => (
    <div className="layout">
      <div className="content">
        {
          edges.map(
            ({
              node: {
                excerpt,
                timeToRead,
                wordCount: {
                  words,
                },
                frontmatter: {
                  title,
                  date,
                  category,
                },
              },
            }) => (
                <div>
                  <h1>
                    {title} ({words} words - {timeToRead} mins)
              </h1>
                  <h2>
                    {category}
                  </h2>
                  <p>{excerpt}</p>
                </div>
              )
          )
        }
      </div>
    </div>
  );

export const pageQuery = graphql`{
  allMarkdownRemark {
    edges {
      node {
        timeToRead
        excerpt
        frontmatter {
          title
          category
        }
        wordCount {
          paragraphs
          sentences
          words
        }
      }
    }
  }
}
`;


export default Blog
