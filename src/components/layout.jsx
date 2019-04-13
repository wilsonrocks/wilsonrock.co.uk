import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="logo">LOGO GOES HERE</div>
    <nav className="navigation">
      <Link to="/" activeClassName="active">home</Link>
      <Link to="/blog" activeClassName="active">blog</Link>
    </nav>
    {children}
    <footer className="footer">
      &copy; {new Date().getFullYear()} All rights and shame reserved
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
