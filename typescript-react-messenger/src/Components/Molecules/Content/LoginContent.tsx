import GoogleIcon from '@mui/icons-material/Google'
import { LoginButton } from '../../Atoms/Button/Button'
import React from 'react'

export const LoginContent = (): JSX.Element => {
  return (
    <div className="login-type-container">
      <div className="login-type-row">
        <GoogleIcon className="login-type-icon"/>
        <LoginButton/>
      </div>
    </div>
  )
}
