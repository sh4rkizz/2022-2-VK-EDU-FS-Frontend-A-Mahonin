import './Button.scss'

import { Link } from 'react-router-dom'

import React from 'react'

export function Button ({ hrefTo, className, name, onClick, onMouseDown, onMouseUp }) {
  if (hrefTo) return (
    <Link to={ hrefTo } style={ { textDecoration: 'none' } }>
      <button className={ className }>{ name }</button>
    </Link>
  )

  return <button className={ className } onMouseDown={ onMouseDown } onMouseUp={ onMouseUp }
                 onClick={ onClick }>{ name }</button>
}

export const LoginButton = () => {
  return (
    <a href="http://localhost:8000/auth/login/google-oauth2/" style={ { textDecoration: 'none' } }>
      <button className="login-button">Login with google</button>
    </a>
  )
}

export const LogoutButton = () => {
  return (
    <a href="http://localhost:8000/logout/" style={ { textDecoration: 'none' } }>
      <button className="logout-button">Logout</button>
    </a>
  )
}