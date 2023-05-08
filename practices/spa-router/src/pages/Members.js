import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Members = () => {
  return (
    <div>
      <h1>Members Page</h1>
      <p>Selcet a member to be shown</p>
      <Link to="John Doe">John Doe</Link> |{" "}
      <Link to="Doe John">Doe John</Link>
      <Outlet />
    </div>
  )
}
