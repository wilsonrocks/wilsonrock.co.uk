import React from "react"
import { Link, graphql } from "gatsby"
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
                  category,
                },
                fields: {
                  slug,
                },
              },
            }) => (
                <div>
                  <Link to={slug}>
                    {title} ({words} words - {timeToRead} mins)
                  </Link>
                  <p>
                    {category}
                  </p>
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
        fields {
          slug
        }
      }
    }
  }
}
`;


export default Blog
