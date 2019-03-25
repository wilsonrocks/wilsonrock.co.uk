import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, description }) => (
  <header>
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
