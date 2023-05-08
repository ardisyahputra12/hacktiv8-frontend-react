import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is my About Us page</p>
      <Link to="about-company">About Company</Link> |{" "}
      <Link to="about-me">About Me</Link>
      <Outlet />
    </div>
  )
}
