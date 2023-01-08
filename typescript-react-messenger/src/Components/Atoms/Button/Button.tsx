import './Button.scss'

import { Link } from 'react-router-dom'
import React from 'react'
import { messengerUrls } from '../../../utils'

interface buttonProps {
  className: string
  name: string
  hrefTo?: string
  onMouseDown?: any
  onMouseUp?: any
  onClick?: any
}

export function Button ({ className, name, hrefTo, onMouseDown, onMouseUp, onClick }: buttonProps): JSX.Element {
  if (hrefTo?.length) {
    return (
    <Link to={ hrefTo } style={ { textDecoration: 'none' } }>
      <button className={ className }>{ name }</button>
    </Link>
    )
  }

  return (
    <button className={ className } onMouseDown={ onMouseDown }
            onMouseUp={ onMouseUp } onClick={ onClick }
    >
      { name }
    </button>
  )
}

export const LoginButton = (): JSX.Element => {
  return (
    <a href={ messengerUrls.login } style={ { textDecoration: 'none' } }>
      <button className="login-button">Login with google</button>
    </a>
  )
}

export const LogoutButton = (): JSX.Element => {
  return (
    <a href={ messengerUrls.logout } style={ { textDecoration: 'none' } }>
      <button className="logout-button">Logout</button>
    </a>
  )
}
