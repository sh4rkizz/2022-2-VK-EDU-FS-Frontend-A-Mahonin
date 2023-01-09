import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { PageChat, PageEditProfile, PageProfile, PageChatList, PageNotFound, PageSettings, LoginPage } from './Pages'
import { GoogleOAuthProvider } from '@react-oauth/google'

interface appProps {
  basePage?: any
}

export const App = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    fetch('api/users/current')
      .then(async resp => await resp.json())
      .then(resp => {
        if (resp) setIsAuth(true)
      })
  })

  const RequireAuth = ({ basePage }: appProps) => {
    setIsAuth(true)
    if (!isAuth) return <Navigate to="/login"/>

    return basePage
  }

  const RequireLogout = ({ basePage }: appProps) => {
    if (isAuth) return <Navigate to="/chats"/>

    return basePage
  }

  return (
    <GoogleOAuthProvider clientId="852169726556-11ubfhtu1bgkfimlsof7i555h1i46v6t.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={ <Navigate to="chats" replace/> }/>
        <Route path="/login" element={ <RequireLogout basePage={ <LoginPage/> }/> }/>
        <Route path="/chats" element={ <RequireAuth basePage={ <PageChatList/> }/> }/>
        <Route path="/settings" element={ <RequireAuth basePage={ <PageSettings/> }/> }/>
        <Route path="/chat" element={ <RequireAuth basePage={ <PageChat/> }/> }/>
        <Route path="/profile" element={ <RequireAuth basePage={ <PageProfile/> }/> }/>
        <Route path="/edit_profile" element={ <RequireAuth basePage={ <PageEditProfile/> }/> }/>
        <Route path="*" element={ <PageNotFound/> }/>
      </Routes>
    </GoogleOAuthProvider>
  )
}
