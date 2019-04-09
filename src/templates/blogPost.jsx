import React from 'react';
import {graphql} from 'gatsby'

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title,
      },
    },
  },
}) => (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );


export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }`;