import './App.css'

import React, {useState} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'

import {PageChat, PageEditProfile, PageProfile, PageChatList, PageNotFound, PageSettings, LoginPage} from './Pages'
import {GoogleOAuthProvider} from '@react-oauth/google'


export const App = () => {
    const [isAuth] = useState(true)

    const RequireAuth = ({basePage}) => {
        if (!isAuth) return <Navigate to='/login'/>

        return basePage
    }

    const RequireLogout = ({basePage}) => {
        if (isAuth) return <Navigate to='/chats'/>

        return basePage
    }

    return (
        <GoogleOAuthProvider clientId='852169726556-11ubfhtu1bgkfimlsof7i555h1i46v6t.apps.googleusercontent.com'>
            <Routes>
                <Route path='/' element={<Navigate to='chats' replace/>}/>
                <Route path='/login' element={<RequireLogout basePage={<LoginPage/>}/>}/>
                <Route path='/chats' element={<RequireAuth basePage={<PageChatList/>}/>}/>
                <Route path='/settings' element={<PageSettings/>}/>
                <Route path='/chat' element={<RequireAuth basePage={<PageChat/>}/>}/>
                <Route path='/profile' element={<RequireAuth basePage={<PageProfile/>}/>}/>
                <Route path='/edit_profile' element={<RequireAuth basePage={<PageEditProfile/>}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </GoogleOAuthProvider>
    )
}
