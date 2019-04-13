import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Blog = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}) => (
  <Layout>
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
          ),
        )
      }
    </div>
  </Layout>
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


export default Blog;
