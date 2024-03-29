import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleLogin = () => {
    localStorage.setItem("token", "login")
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Klik the button to login</p>
      <button
        className='login-button'
        onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  )
}
