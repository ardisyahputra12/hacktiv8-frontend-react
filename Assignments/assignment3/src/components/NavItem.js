import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export const NavItem = ({ title, path }) => {
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Nav.Item className='NavItem' onClick={bottomToTop}>
      <Nav.Link
        as={Link}
        to={path}
        eventKey={path}
        className='text-white'
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classList: PropTypes.string,
}