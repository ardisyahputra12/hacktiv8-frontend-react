import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const location = useLocation()

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
